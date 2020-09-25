import React from 'react';
import './App.css';
import Homepage from "./Components/pages/homepage/Homepage.components";
import {Switch, Route, Redirect} from "react-router-dom";
import ShopPage from "./Components/pages/shop/shop.component"
import Header from "./Components/header/header.component";
import SignInAndSignUpPage from "./Components/pages/sign-in-and-sign-up/sign-in-and-sign-up.components";
import {
  auth,
  createUserProfileDocument,
} from "./firebase/firebase.utils"; // step 3 /step4 importing createUserProfileDocument
import {connect} from "react-redux";
import {setCurrentUser } from "./redux/user.action"




class App extends React.Component{
unsubscribeFromAuth = null; //we want to close our unsubscribtion to our database so that it will know if the user has updated something to the database or not. if something has updated we don't want to always send data so we call an unsubscibeFromAuth method

    componentDidMount(){

      const{setCurrentUser} = this.props;

      this.unsubscribeFromAuth= auth.onAuthStateChanged(async  userAuth =>{
        //auth.onAuthStateChenged. you will want to know whether your users are currently signed-in or signed-out of your application

        if (userAuth) { //if userAuth is not null
          const userRef = await createUserProfileDocument(userAuth);

          userRef.onSnapshot((snapShot) => { // we want to check if the user data has been updated.
            setCurrentUser({
              id: snapShot.id,
              ...snapShot.data(), //getting the data of a snapshot 
            });
          });
        } else {
          setCurrentUser(userAuth);
        }
      });

    }

    componentWillUnmount(){
      this.unsubscribeFromAuth(); // we call this.unsubscribeFromAuth to componentWillUnmout so that it be called before the element is removed from the dom. in this case this will close the subscribtion
    }

  render(){
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact  path="/signin" render={()=> this.props.currentUser ? (<Redirect to="/" /> ): (<SignInAndSignUpPage/>)} />
      </Switch>
    </div>
  );
  }
}
const mapStateToProps = ({user})=>({
currentUser:  user.currentUser
});

const mapDispatchToProps = dispatch =>({
setCurrentUser: user =>dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
