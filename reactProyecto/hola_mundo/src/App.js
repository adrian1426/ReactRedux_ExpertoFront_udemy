import React,{Component} from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import Loadable from 'react-loadable';
// import Prueba from './components/Prueba';
// import Invoices from './components/Invoices';

const Loader = x => Loadable({
    loading:() => "Cargando...",
    loader: x
});

const Prueba= Loader(() => import('./components/Prueba'));
const Invoices= Loader(() => import('./components/Invoices'));

class App extends Component {

  render(){
    return (
      <div className="App">
      <Route exact path="/" component={Prueba}/>
      <Route exact path="/Invoices" component={Invoices}/>
      </div>
    );
  }
}

export default App;