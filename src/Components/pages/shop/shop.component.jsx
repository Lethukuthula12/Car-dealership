//because we have to store data in shop components then we going to use a class component
import React from "react";
import {Route} from "react-router-dom";
import CollectionPage from "../collection/collection.component";
import CollectionOverview from "../../collections-overview/collection-overview.component"
import "./shop-page.styles.scss"

const ShopPage = ({ match }) => {
  console.log(match);
  return(<div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionOverview} />
    
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>)
}
    



export default ShopPage;