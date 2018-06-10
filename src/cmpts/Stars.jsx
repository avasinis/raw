import React, { Component } from 'react';
import './stars.css';


function range(size, startAt = 0) {
    return [...Array(size).keys()].map(i => i + startAt);
}

export class Star extends Component{
    render(){
        return(
            <div className="star" onClick={this.props.frozen ? ()=>{} : this.props.onClick}
                 style={{cursor: this.props.frozen ? "initial" : "pointer"}}>

            {this.props.active ?
             (
                 <i className="material-icons" style={{color:"gold"}}>
                     star
                 </i>
             ):
             (
                 <i className="material-icons" style={{color: "black"}}>star_border</i>
             )
            }

        </div>
        );
    }
}

export class Stars extends Component{
    render(){
        return(
            <div className="stars">
                {
                    range(this.props.n).map((n)=>
                        <Star frozen={this.props.frozen} key={n} active={this.props.amount >= n} onClick={()=> {this.props.onClick(n)}}></Star>
                    )
                }
            </div>
        );
    }
}
