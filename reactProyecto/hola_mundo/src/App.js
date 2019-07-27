import React,{Component} from 'react';
import ViewList from './components/ViewList';
import UserForm from './components/UserForm';
import axios from 'axios';
import './App.css';

class App extends Component {
    state={
        data:[],
        ruta:'lista'
    }

    constructor(){
        super();
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(({data})=> this.setState({data}))
    }

    seleccionarUsuario = id =>{
        this.setState({
            ruta:'formulario',
            usuarioSeleccionado:id
        });
    }

    agregarNuevoUsuario = usuario =>{
        axios.post("https://jsonplaceholder.typicode.com/users",usuario)
        .then(({data}) =>{
            const newData = this.state.data.concat(data);
            this.setState({
                data:newData,
                ruta:'lista'
            });
        })

    }

    actualizarUsuario = (id, values) =>{
        axios.put(`https://jsonplaceholder.typicode.com/users/${id}`,values)
        .then(() =>{
            const newData= this.state.data.map(x => x.id===id ? values : x)
            this.setState({data:newData,ruta:'lista'});
        })
    }

    nuevoUsuario = () =>{
        this.setState({ruta:'formulario'});
    }

  render(){
      const {ruta,data,usuarioSeleccionado} = this.state;
      const valoresIniciales= usuarioSeleccionado && data.find(x => x.id===usuarioSeleccionado);
      console.log("iniciales: ",valoresIniciales);
    return (
      <div className="App">
      {ruta==='lista' && <ViewList 
       data={data}
       handleClick={this.seleccionarUsuario}
       nuevoUsuario={this.nuevoUsuario}
       />}
      {ruta==='formulario' && <UserForm handleSubmit={this.agregarNuevoUsuario} valoresIniciales={valoresIniciales || []} handleUpdate={this.actualizarUsuario}/>}
      </div>
    );
  }
}

export default App;