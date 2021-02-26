import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import { ReactComponent as Logo } from '../../assets/clothes-hanger.svg';

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink
} from './header.styles';



const Header = ({ currentUser, hidden }) => {
  let Login=localStorage.getItem("Login")
  const [login, setlogin] = useState(Login)
  const history = useHistory ()
  const signOut = () => {


    const signOut=localStorage.clear()
    if ( signOut==undefined ) {
      history.push('/signin')
    } 
  }

  useEffect (() => {
    setlogin(Login)
  }, [login] )

  console.log(Login)
  
  return (
    <HeaderContainer>
      <LogoContainer to='/'>
        <Logo className='logo' />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to='/shop'>SHOP</OptionLink>
        <OptionLink to='/contact'>CONTACT</OptionLink>
        {login != undefined ? (
          <OptionLink onClick={ signOut }>SIGN OUT</OptionLink>
        ) : (
          <OptionLink to='/signin'>
            SIGN IN
          </OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {hidden ? null : <CartDropdown />}
    </HeaderContainer>
  );
}
// Structured selector will automatically pass top level state to each selector
const mapStateToProps = createStructuredSelector({

  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
