import React,{Component} from 'react'
import './Input.css'

class Input extends Component{
    state = {
        value : ''
    }
    passData = (event)=>{
        let value = event.target.value.trim();
        this.setState({
            value:event.target.value
        })
        this.props.changeHandler(value===""?"0":value);
    }
    render(){
        const { changeHandler, ...props} = this.props;
        return(
            <div className="inputBox">
                <input type="text" value={this.state.value} {...props} onChange={this.passData}/>   
            </div>
        )
    }
}

export default Input;