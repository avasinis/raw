import React, { Component } from 'react';
import Feedback from './Feedback';

export default class FeedbackList extends Component{
    render(){
        let frozen = this.props.frozen;this
        return(
            <ul className="collection">
            {this.props.data.map((item, idx)=>
                <Feedback key={idx} text={item.text} score={item.score} frozen={frozen}>
                </Feedback>
            )}
            </ul>
        )
    }
}
