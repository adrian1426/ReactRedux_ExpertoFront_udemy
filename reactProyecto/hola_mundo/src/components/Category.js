import React,{Component} from 'react';
import CategoryForm from './CategoryForm';
import CategoryList from './CategoryList';

class Category extends Component{
    render(){
        const {categorias, addCategory, selectCategory} = this.props;
        return(
            <div>
            <CategoryForm onSubmit={addCategory}/>
            <CategoryList selectCategory={selectCategory} categorias={categorias}/>
            </div>
        );
    }
}

export default Category;