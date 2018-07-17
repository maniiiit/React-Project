import React, { Component } from 'react';
import Row from './Row/Row';
import Input from './Input/Input';

class App extends Component {
  
  state = {
    rows: 0,
    cols: "",
    rowSpace: 0,
    colSpace: 0
  }
  
  rowsHandler = (data) =>{
    this.setState({
      rows: data,
      cols: this.state.cols,
      rowSpace: this.state.rowSpace,
      colSpace: this.state.colSpace
    })
  }
  colsHandler = (data) =>{
    this.setState({
      rows: this.state.rows,
      cols: data,
      rowSpace: this.state.rowSpace,
      colSpace: this.state.colSpace
    })
  }
  rowSpaceHandler = (data) => {
    this.setState({
      rows: this.state.rows,
      cols: this.state.cols,
      rowSpace: data,
      colSpace: this.state.colSpace
    })
  }
  colSpaceHandler = (data) => {
    this.setState({
      rows: this.state.rows,
      cols: this.state.cols,
      rowSpace: this.state.rowSpace,
      colSpace: data
    })
  }
  renderRows =() => {
    let rows = [];
    for(let i=0; i<this.state.rows; i++){
      rows.push(<Row 
        key={"Row-"+i} 
        boxesCount={this.state.cols.split(',')[i]}
        rowStyle={{marginTop:i===0?0:this.state.rowSpace+"px"}}
        boxSpace={this.state.colSpace}
      />);
    }
    return rows;
  }
  render() {
    return (
      <div className="App">
        {/* no need of rows input, we have already input for columns for each row  */}
        <Input placeholder="No of Rows" name="no-of-rows" changeHandler = {this.rowsHandler} />
        <Input placeholder="Columns separated by Comma" name="columns-string" changeHandler = {this.colsHandler} />
        <Input placeholder="Row gutter" name="gutter-row" changeHandler = {this.rowSpaceHandler} />
        <Input placeholder="Column gutter" name="gutter-col" changeHandler = {this.colSpaceHandler} />

        {this.renderRows()}
      </div>
    );
  }
}

export default App;
