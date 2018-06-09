import React, { Component } from 'react';
import Plot from 'react-plotly.js';

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

class FeedbackList extends Component{
    render(){
        return(
            <div>
                FeedbackList
            </div>
        );
    }
}

export default class Step5 extends Component{
    render(){
        return(
            <div className="view">
                <div className="row">
                    <div className="col s12">
                        <BarGraph></BarGraph>
                    </div>
                    <div className="col s12">
                        <FeedbackList></FeedbackList>
                    </div>
                </div>
            </div>
        );
    }
}
