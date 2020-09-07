//because we have to store data in shop components then we going to use a class component

import React, { Component } from "react";
import SHOP_DATA from "./shop.data";
import CollectionPreview from "../../preview-component/collection-preview"

class ShopPage extends Component{
    constructor(props){
        super(props);


        this.state = { collections: SHOP_DATA };
    };


    render(){
        const {collections} = this.state;
        return(<div className="shop-page">
              {
                  collections.map(({id, ...otherCollectionProps}) =>(
                  <CollectionPreview key={id} {...otherCollectionProps} />))
             }
            </div>
        );
    }
}

export default ShopPage;