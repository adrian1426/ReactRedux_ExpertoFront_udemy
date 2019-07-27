import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class Invoices extends Component{
    render(){
        return(
            <div>
                este es el componente invoices
                <Link to="/">Volver a la raiz</Link>
            </div>
        );
    }
}

export default Invoices;