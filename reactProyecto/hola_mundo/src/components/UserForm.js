import React,{ Component } from 'react';

const validate= valores =>{
    const errors={};
    if(!valores.name){
        errors.name="Campo nombre es obligatorio";
    }
    if(!valores.email){
        errors.email="Campo email es obligatorio";
    }
    if(!valores.website){
        errors.website="Campo website es obligatorio";
    }
    return errors;
}
class UserForm extends Component{

    state={
        errors:{}
    };

    constructor(props){
        super(props);
        this.state={
            ...this.state,
            ...props.valoresIniciales
        }
    }

    handleChange = ({target}) =>{
        this.setState({
            [target.name]:target.value
        })
    }

    handleSubmit = e =>{
        e.preventDefault();
        const {errors,...sinErrors} = this.state;
        const result= validate(sinErrors);
        
        if(!Object.keys(result).length){
            //enviar formulario
            const {handleSubmit, valoresIniciales,handleUpdate} = this.props;
            if(valoresIniciales.id){
                handleUpdate(valoresIniciales.id,sinErrors);
            }
            else{
                handleSubmit(sinErrors);
            }
           // e.target.reset();
        }
        else{
            this.setState({errors:result});
        }
    }

    render(){
        const {errors}= this.state;
        const {valoresIniciales} = this.props;
        return(
            <form onSubmit={this.handleSubmit}>
                <input defaultValue={valoresIniciales.name} placeholder="Nombre" name="name" onChange={this.handleChange}/>
                {errors.name && <p>{errors.name}</p>}
                <input defaultValue={valoresIniciales.email} placeholder="email" name="email" onChange={this.handleChange}/>
                {errors.email && <p>{errors.email}</p>}
                <input defaultValue={valoresIniciales.website} placeholder="website" name="website" onChange={this.handleChange}/>
                {errors.website && <p>{errors.website}</p>}
                <input type="submit" value="Enviar"/>
            </form>
        );
    }
}

export default UserForm;