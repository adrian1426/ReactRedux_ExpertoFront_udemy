import React,{Component} from 'react';

class CategoryList extends Component{

    //Función currently
    handleClick = (id) => () =>{
        const {selectCategory}= this.props;
        selectCategory(id);
    }

    render(){
        const {categorias}= this.props;
        return(
            <ul>
                {
                    categorias.map((cate,i) =>
                        <li onClick={this.handleClick(cate.id)} key={i}>{cate.name}</li>
                    )
                }
            </ul>
        );
    }
}

export default CategoryList;