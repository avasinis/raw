import React, { Component } from 'react';
import Feedback from './Feedback';

export default class FeedbackList extends Component{
    render(){
        let frozen = this.props.frozen;this
        return(
            <ul className="collection">
            {this.props.data.map((item, idx)=>
                <Feedback key={idx} index={idx + 1} text={item.text} score={item.score} frozen={frozen}
                onRate={(score)=>{
                    this.props.onRate(idx, score);
                }}>
                </Feedback>
            )}
            </ul>
        )
    }
}
