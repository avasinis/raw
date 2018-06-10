import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';

import Step4 from './cmpts/step4';
import Step5 from './cmpts/step5';
import './cmpts/view.css';
import './cmpts/sideNav.css';

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

Amplify.configure(aws_exports);


class SideNav extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    componentDidMount(){
        let element = document.getElementById('slide-out');
        let instance = window.M.Sidenav.init(element, {isFixed: true})
        this.setState({instance: instance});
    }
    render(){
        return(
            <ul id="slide-out" className="sidenav sidenav-fixed">
                <li>
                    <div className="user-view">
                        <div className="background" style={{
                            background: "linear-gradient(140deg, #59b0ff,#b288ff)",
                        }}>
                        </div>
                        <div className="avatar-row">
                            <img className="circle" src="images/avatar.jpg"/>
                            <div className="indicators">
                                <div>
                                    <i className="material-icons left">attach_money</i>
                                    7,811.19
                                </div>
                                <div>
                                    <i className="material-icons left">people</i>
                                    3,534
                                </div>
                                <div>
                                    <i className="material-icons left">star</i>
                                    32,430
                                </div>
                            </div>
                        </div>
                        <a href="#name"><span className="white-text name">Aurélien Vasinis</span></a>
                        <a href="#email"><span className="white-text email">aurelien.vasinis@brainsfeed.com</span></a>
                    </div>
                </li>
            </ul>
        );
    }
}

class App extends Component {
    constructor(props){
        super(props);
        this.state = {page: "step4"};
    }
    render() {
        return (
            <div className="App">
                <div className="layout">
                    <SideNav></SideNav>
                    <Router>
                        <div>
                            <Route exact path="/" component={Step4}></Route>
                            <Route path="/step5" component={Step5}></Route>
                        </div>
                    </Router>
                </div>
            </div>
        );
    }
}

export default App;
