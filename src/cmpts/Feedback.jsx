import React, { Component } from 'react';
import './feedback.css';

import {Stars} from './Stars';

export default class Feedback extends Component{

    render(){
        return(
            <li className="feedback collection-item avatar">
                {this.props.score != undefined ?
                 <img className="circle" alt="" src={"/images/avatars/" + this.props.index + ".jpg"}/>
                 : <img alt="" src=""/>
                }
                {this.props.text}
                <div className="ranking">
                    {this.props.frozen ? "" : "What do you think of this feedback ?"}
                    <Stars frozen={this.props.frozen} n={5}
                           amount={Math.floor(this.props.score)}
                           onClick={(score)=> {
                                   this.props.onRate(score)
                           }}>
                    </Stars>
                </div>
            </li>
        );
    }
}
