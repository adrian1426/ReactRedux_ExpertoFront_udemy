import React,{Component} from 'react';
import './App.css';
import {connect} from 'react-redux';
import * as duck from './reducers/index2';
import {bindActionCreators} from 'redux';
class App extends Component {

    handleChange = (e) =>{
        const {name,value}=e.target;
        this.setState({[name]:value});
    }
    handleSetear = (e) =>{
        const {setear}=this.props;
        const {valor} = this.state;
        setear(Number(valor));
    }
    render(){
      const {incrementar,decrementar,valor}=this.props;
      console.log(this.state);
    return (
      <div className="App">
      <p>valor: {valor}</p>
      <br/>
      <button onClick={incrementar}>Incrementar</button>
      <br/>
      <button onClick={decrementar}>Decrementar</button>
      <br/>
      <input name="valor" onChange={this.handleChange}/>
      <button onClick={this.handleSetear}>Setear</button>
      </div>
    );
  }
}
const mapStateToProps = state =>{
  console.log({state});
  return{
      valor:state
  }
}

const mapDispatchToProps = dispatch=>bindActionCreators(duck,dispatch);

export default connect(mapStateToProps,mapDispatchToProps)(App); 