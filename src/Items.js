import React, { Component } from 'react';
import data from './data.json';
import CItem from './CItem';

export default class Items extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            amount: [0, 1, 2, 3]
        }
    }
    
    render() {
        return (
            <div className="container d-flex justify-content-around" id='content'>
                {
                    data.map(item => (
                        < CItem name = {item.name} price = {item.price} descrs = {item.description} image = {item.image} index = {item.id} func = {this.props.func}/>
                    ))
                }
            </div>
        )
    }
}
