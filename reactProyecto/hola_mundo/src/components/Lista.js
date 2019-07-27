import React,{Component} from 'react';

class Lista extends Component{

    handleClick = id => datos =>{
        const {handleClick} =this.props;
        handleClick(id);
    }

    render(){
        const {data}=this.props;
        return(
            <ul>
                {
                    data.map( (resultado,i) =>
                        <li key={i}>{resultado.name} <button onClick={this.handleClick(resultado.id)}>Editar</button></li>
                    )
                }
            </ul>
        );
    }
}

export default Lista;