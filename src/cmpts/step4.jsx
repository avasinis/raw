import React, { Component } from 'react';
import './step4.css';

import {Link} from 'react-router-dom';

export default class Step4 extends Component{
    componentDidMount(){
        window.imageMapResize();
    }
    render(){
        return(
            <div className="view">
                <img alt="" src="/images/step4.jpg"  useMap="#image-map" width="100%"/>
                <map name="image-map">
                    <area target="_self" alt="_" title="go to step 5" href="/step5"
                          coords="1190,693,936,604" shape="rect"/>
                </map>
            </div>
        );
    }
}
