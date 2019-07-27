import React,{Component} from 'react';

const styles={
    inline:{
        display:'inline',
        marginRight:'15px'
    }
}

class Header extends Component{
    render(){
        const {nuevoUsuario}=this.props;
        return(
            <header>
                <h2 style={styles.inline}>Lista de usuarios</h2>
                <button style={styles.inline} onClick={nuevoUsuario}>Nuevo Usuario</button>
            </header>
        );
    }
}

export default Header;