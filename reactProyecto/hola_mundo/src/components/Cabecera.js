import React, {Component} from 'react';
import logo from '../logo.svg';

class Cabecera extends Component{
    manejaClick = () =>{
        const {miau, manejaClick} = this.props;
        manejaClick(miau);
    }
    render(){
        const {miau} = this.props;
        return(
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={this.manejaClick}>click</button>
        <p>
         {miau}
        </p>
        </header>
        );
    }
}

export default Cabecera;
