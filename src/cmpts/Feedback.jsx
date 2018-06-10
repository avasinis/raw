import React, { Component } from 'react';
import './feedback.css';

import {Stars} from './Stars';

export default class Feedback extends Component{
    constructor(props){
        super(props);
        this.state = {score: props.score};
    }

    render(){
        return(
            <li className="feedback collection-item avatar">
                <img alt="" src=""/>
                {this.props.text}
                <div className="ranking">
                    What do you think of this feedback ?
                    <Stars n={5} amount={Math.floor(this.state.score)} onClick={(n)=> {
                            this.setState({score: n});
                    }}></Stars>
                </div>
            </li>
        );
    }
}
