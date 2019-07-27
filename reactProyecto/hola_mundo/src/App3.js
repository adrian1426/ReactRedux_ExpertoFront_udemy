import React,{Component} from 'react';
import './App.css';
import FormularioSimple from './components/FormularioSimple';
import axios from 'axios';

class App extends Component {

    constructor(){
        super();
        /*
        --GET
        fetch("https://jsonplaceholder.typicode.com/users")
           .then( respuesta => respuesta.json())
           .then(respuesta => console.log(respuesta))
        */ 

        /*
        //POST
        fetch("https://jsonplaceholder.typicode.com/users",{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                name:"Adrian",
                username:"adrian1234"
            })
        })
        .then(respuesta => respuesta.json())
        .then(respuesta => console.log(respuesta))
         */

         axios.post("https://jsonplaceholder.typicode.com/users",{
             name:"Adrian",
             username:"adr1234"
         })
         .then(({data}) => console.log(data))
        
    }

  render(){

    return (
      <div className="App">
      <FormularioSimple/>
      </div>
    );
  }
}

export default App;