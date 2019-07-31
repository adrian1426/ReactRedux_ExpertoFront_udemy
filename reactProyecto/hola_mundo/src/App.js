import React,{Component} from 'react';
import './App.css';
import {connect} from 'react-redux';
// import { incrementar,decrementar,setear } from './reducers/index';
import UserFormRedux from './components/UserFormRedux';

class App extends Component {

    handleSubmit = payload =>{
        console.log(payload);
    }
  render(){
    return (
      <div className="App">
      <UserFormRedux onSubmit={this.handleSubmit}/>
      </div>
    );
  }
}

const mapStateToProps = state =>{
    return{
        valor:state.contador
    }
}

const mapDispatchToProps = dispatch=>({
    // incrementar: () => dispatch(incrementar()),
    // decrementar: () => dispatch(decrementar()),
    // setear: payload => dispatch(setear(payload))
});

export default connect(mapStateToProps,mapDispatchToProps)(App);