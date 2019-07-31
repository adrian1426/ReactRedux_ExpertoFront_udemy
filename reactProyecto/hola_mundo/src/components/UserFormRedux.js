import React,{Component} from 'react';
import {reduxForm, Field} from 'redux-form';
import CustomInput from './CustomInput';

const validate=values =>{
    const errors={};

    if(!values.name){
        errors.name="Campo Nombre obligatorio";
    }

    if(!values.lastname){
        errors.lastname="Campo Apellido obligatorio";
    }

    return errors;
}

class UserFormRedux extends Component{
    render(){
        const {handleSubmit} = this.props;
        console.log(this.props);
        return(
            <form onSubmit={handleSubmit}>
            <Field name="name" component={CustomInput} placeholder="Nombre" title="Nombre"/>
            <Field name="lastname" component={CustomInput} placeholder="Apellido" title="Apellido"/>
            <input type="submit" value="Enviar"/>
            </form>
        );
    }
}

export default reduxForm({
    form:'user',
    validate
}) (UserFormRedux);