import React, { Component } from 'react';
import Plot from 'react-plotly.js';
import FeedbackList from './FeedbackList';

class BarGraph extends Component{
    render(){
        return(
            <div>
                <Plot
                    data={[
                        {
                            type: 'bar',
                            x: [1, 2, 3],
                            y: [2, 5, 3]
                        }
                    ]}
                    layout={{
                        //width: 320,
                        //height: 240,
                        title: 'How much time would you spend on a mission on average?',
                        subTitle : 'In minutes'
                    }}
                />
            </div>
        );
    }
}

let feedbacks = [
    {
        text: "Hello",
        score: 3.5
    },
    {
        text: "Hello2",
        score: 1
    }
];

export default class Step5 extends Component{
    render(){
        return(
            <div className="view">
                <div className="row">
                    <div className="col s12">
                        <BarGraph></BarGraph>
                    </div>
                    <div className="col s12">
                        <FeedbackList data={feedbacks}>
                        </FeedbackList>
                    </div>
                </div>
            </div>
        );
    }
}
