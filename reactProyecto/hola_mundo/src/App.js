import React,{Component} from 'react';
import './App.css';
import { connect } from 'react-redux';
import miThunk from './Thunk';

class App extends Component {
  constructor(props){
    super(props);
    const {miThunk}=props;
    miThunk("lala");
  }
  render(){
    return (
      <div className="App">
      <h1>Hola thunk</h1>
      </div>
    );
  }
}

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
  miThunk: payload => dispatch(miThunk(payload))
});
export default connect(mapStateToProps,mapDispatchToProps) (App);