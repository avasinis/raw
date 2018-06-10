import React, { Component } from 'react';
import Feedback from './Feedback';

export default class FeedbackList extends Component{
    render(){
        return(
            <ul className="collection">
                this.props.data.map((item) => {
                    return(
                        <Feedback text={item.text} score={item.score}></Feedback>
                    )
                });
            </ul>
        );
    }
}
