import React ,{Component} from 'react';

const validate = values =>{
    const errors ={}
    if(!values.nombre){
        errors.nombre="Campo Nombre es obligatorio!";
    }
    if(!values.apellido){
        errors.apellido="Campo Apellido es obligatorio!";
    }
    return errors;
}

class FormularioSimple extends Component{

    state={
        errors:{}
    };

    handleChange = ({target}) =>{
        console.log(target);
        const {name,value} = target;
        this.setState({[name]:value});
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        const {errors,...sinErrors} =this.state;
        const result=validate(sinErrors);
         
        this.setState({errors:result});
        if(!Object.keys(result).length){
           //Enviar formulario
           console.log("formulario válido; ", this.state);
           e.target.reset();
        }
    }

    render(){
        const {errors}=this.state;
        return(
            <form onSubmit={this.handleSubmit}>
                <input name="nombre" onChange={this.handleChange}/>
                {errors.nombre && <p>{errors.nombre}</p>}
                <input name="apellido" onChange={this.handleChange}/>
                {errors.apellido && <p>{errors.apellido}</p>}
                <input type="submit" value="Enviar"/>
            </form>
        );
    }
}

export default FormularioSimple;
