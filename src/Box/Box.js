import React from 'react';
import './Box.css';

class Box extends React.Component{
    render(){
        return(
            <div className="box" style={this.props.boxStyle}>
            </div>
        );
    }
}

export default Box;