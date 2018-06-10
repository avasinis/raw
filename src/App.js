import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';

import Step5 from './cmpts/step5';
import './cmpts/view.css';
import './cmpts/sideNav.css';

Amplify.configure(aws_exports);


class Page extends Component{
    render(){
        console.log(this.props.page)
        switch(this.props.page){
            case "step5": return <Step5></Step5>;
        }
    }
}

class SideNav extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    componentDidMount(){
        let element = document.getElementById('slide-out');
        let instance = window.M.Sidenav.init(element, {isFixed: true})
        /* instance.open(); */
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

class Layout extends Component{
    render(){
        return(
            <div className="layout">
                <SideNav></SideNav>
                <Page page={this.props.page}></Page>
            </div>
        );
    }
}

class App extends Component {
    constructor(props){
        super(props);
        this.state = {page: "step5"};
    }
    render() {
        return (
            <div className="App">
                <Layout page={this.state.page}></Layout>
            </div>
        );
    }
}

export default App;
