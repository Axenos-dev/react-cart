import './App.css';
import React, { Component } from 'react';
import MainPage from './MainPage.js';
import CHeader from './CHeader';
import CartItem from './CCartItem.js';
import data from './data.json';

export default class App extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            opened: false,
            items: [],
            amount: [],
            indexes: [],
            summ: 0
        }

        this.addToCart = this.addToCart.bind(this)
        this.handleOpenCart = this.handleOpenCart.bind(this)
        this.uniqueArray = this.uniqueArray.bind(this)
        this.deleteItems = this.deleteItems.bind(this)

        for(var i = 0; i < data.length; i++){
            this.state.amount.push(0);
        }
    }

    addToCart(index){
        this.state.amount[index] += 1
        
        this.setState({
            items: [...this.state.items, <CartItem index = {index}/>]
        })
        this.state.indexes.push(index)
        this.state.summ += data[index].price
        console.log(this.state.indexes)
    }

    deleteItems(){
        this.setState({
            indexes: [],
            summ: 0
        })

        for(var i = 0; i < this.state.amount.length; i++){
            this.state.amount[i] = 0;
        }
    }
    
    handleOpenCart(e){
        this.setState({
            opened: !this.state.opened
        });
        console.log(this.state.status)
    }
    uniqueArray(array){
        var unique = array.filter((v, i, a) => a.indexOf(v) === i);

        return(unique)
    }
    
    render() {
        return(
            <>
                {
                    this.state.opened ? (
                        <div className='main' onClick = {(e) => this.handleOpenCart(e)}></div>
                    ):null
                }
                    <CHeader openCart = {this.handleOpenCart}/>

                    <MainPage openValue = {this.state.opened} func = {this.addToCart}/>

                    {
                        this.state.opened ? (
                            <div className = 'p-3 border rounded cart'>
                                <div className = 'w-100 p-3 cart-header'><h4 className=' my-1 fw-normal'> Your Cart </h4></div>
                                <div className = 'cartItems'>
                                    {
                                        this.uniqueArray(this.state.indexes).map(index => (
                                            <CartItem index = {index} amount = { this.state.amount[index] }/>
                                        ))
                                    }
                                </div>
                                <div>
                                    <button className = 'btn btn-success w-100'>Order ${ this.state.summ }</button>
                                    <button className = 'btn border w-100 mt-1 deletebtn' onClick = {this.deleteItems}>Delete all</button>
                                </div>
                            </div>
                        )
                        :
                        null
                    }    
            </>   
        )
    }
}