import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux"; //connect is a high order component that let us connect to anything related to redux
import {ReactComponent as Logo} from "../../assets/crown.svg";
import {auth} from "../../firebase/firebase.utils"; //step 4
import CardIcon from "../card-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import "./header.styles.scss";


const Header = ({ currentUser , hidden }) => ( //distructuring a current user to our app
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/contact">
        CONTACT
      </Link>
      {currentUser ? ( // checking if the user is signed in or signed out, and displaying a div or a link depending on the state of the user
        <div className="option" onClick={() => auth.signOut()}>
          {" "}
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
      <CardIcon />
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
);
 
 //this allow us to access the state from our root reducer
const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
  currentUser,
  hidden
});

export default connect(mapStateToProps)(Header);