import React, { Component } from 'react';
class ShoppingList extends Component {
    state = {  }
    render() { 
        return (<div className="shopping-List">
            <h1>Shopping List for {this.props.name}</h1>
            <ul>
                <li>Iphone</li>
                <li>Apple Watch</li>
                <li>Apple TV</li>
            </ul>
        </div>  );
    }
}
 
export default ShoppingList;