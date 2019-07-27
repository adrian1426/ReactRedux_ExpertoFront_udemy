import React,{Component} from 'react';
import './App.css';
import Cabecera from './components/Cabecera';

const styles={
  App: (backgroundColor) => ({
    backgroundColor,
    textAlign: 'center'
  })
}

class App extends Component {

  state ={
    miau:"Bienvenido amigo",
    backgroundColor :'#E3B2A8'
  }

  cambiaColorHeader = () =>{
   this.setState({backgroundColor:'#8EECA6'});
  }
 
  manejaClick = (miau) =>{
   console.log(miau);
  }

  cambiarTexto = () =>{
    this.setState({miau:"Nuevo mensaje"});
  }
  render(){
    const miauu="Bienvenido miauuuuu!!!";
    const {miau,backgroundColor}=this.state;

    return (
      <div onClick={this.cambiaColorHeader} style={styles.App(backgroundColor)}>
      <Cabecera miau={miauu} manejaClick={this.manejaClick}/>
      <h3 onClick={this.cambiarTexto}>{miau}</h3>
    </div>
    );
  }
}

export default App;
