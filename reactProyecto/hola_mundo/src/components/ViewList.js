import React,{ Component } from 'react';
import Header from './Header';
import Lista from './Lista';

class ViewList extends Component{
    render(){
        const {data, handleClick,nuevoUsuario} = this.props;
        return(
            <div>
                <Header nuevoUsuario={nuevoUsuario}/>
                <Lista data={data} handleClick={handleClick}/>
            </div>
        );
    }
}

export default ViewList;
