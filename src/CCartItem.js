import React, { Component } from 'react';
import data from './data.json'

export default class CCartItem extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             index: this.props.index
        }
    }
    
    render() {
        return (
            
            <div className = 'cartItem'>
                <img alt = 'item pic' src = { data[this.state.index].image } className='rounded mx-auto d-block col border shadow-sm img'/>
                <div className='features py-3'>
                    <h4>{ data[this.state.index].name }</h4>
                    <h2 className='card-title pricing-card-title'>${ data[this.state.index].price }</h2>
                    <h5>x{ this.props.amount }</h5>
                </div>
            </div>
        )
    }
}
