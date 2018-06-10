import React, { Component } from 'react';

function range(size, startAt = 0) {
    return [...Array(size).keys()].map(i => i + startAt);
}

export class Star extends Component{
    render(){
        <div className="star" onClick={this.props.onClick()}>
        if(this.props.active){
            <i className="material-icons">star</i>
        }
        else{
            <i className="material-icons">star_border</i>
        }
        </div>
    }
}

export class Stars extends Component{
    render(){
        <div className="stars">
            range(this.props.n).map((n)=>{
                return(
                    <Star active={this.props.amount >= n} onClick={()=> {this.props.onClick(n)}}></Star>
                );
            })
        </div>
    }
}
