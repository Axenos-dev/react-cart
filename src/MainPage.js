import React, { Component } from 'react';
import Items from './Items.js';

export default class MainPage extends Component {
    render() {
        return (
            <div>
                <Items opened = {this.props.openValue} func = {this.props.func}/>
            </div>
        )
    }
}