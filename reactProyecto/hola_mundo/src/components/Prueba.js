import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Prueba extends Component{

    handleClick = () =>{
        const {history} = this.props;
        history.push('/Invoices');
    }

    render(){
        return(
            <div onClick={this.handleClick}>
                este es el componente Prueba
                <Link to="/Invoices"> Ir a Invoices</Link>
            </div>
        );
    }
}

export default Prueba;