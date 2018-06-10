import React, { Component } from 'react';

export default class Feedback extends Component{
    constructor(props){
        super(props);
        this.state = {score: 0};
    }

    render(){
        return(
            <li className="collection-item avatar">
                {this.props.text}
            </li>
        );
    }
}
