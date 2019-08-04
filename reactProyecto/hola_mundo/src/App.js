import React,{Component} from 'react';
import './App.css';
import { connect } from 'react-redux';
import Category from './components/Category';
import News from './components/News';
import {addCategory,selectCategory} from './reducers/Categorias';
import {reset} from 'redux-form';
import { addNews } from './reducers/Noticias';

class App extends Component {
  render(){
    const {
      categorias, 
      addCategory,
      news,
      addNews,
      selectCategory,
      selected} = this.props;
    return (
      <div className="App">
      <Category
         selectCategory={selectCategory} 
         addCategory={addCategory} 
         categorias={categorias}/>
      <News 
         selectedCategory={selected}
         addNews={addNews} 
         news={news}/>
      </div>
    );
  }
}

const mapStateToProps = state =>{
  const {Categorias: {data: categorias,selected},Noticias: {data: news}} = state;
  // console.log("new: ",news);
  return {
    categorias,
    selected,
    news: news.filter(x => x.categoryId===selected)
  }
};

const mapDispatchToProps = dispatch =>({
  addCategory: payload =>{
    dispatch(addCategory(payload))
    dispatch(reset('category'))
  },
  addNews: payload =>{
    dispatch(addNews(payload))
    dispatch(reset('news'))
  } ,
  selectCategory: payload => 
  dispatch(selectCategory(payload))
});

export default connect(mapStateToProps,mapDispatchToProps) (App);