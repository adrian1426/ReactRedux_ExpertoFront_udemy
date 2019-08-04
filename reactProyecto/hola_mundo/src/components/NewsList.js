import React,{Component} from 'react';

class NewsList extends Component{
    render(){
        const {news} = this.props;
        return(
            <ul>
               {
                   news.map( (n,i) =>
                   <li key={i}>{n.name}</li>
                )
               }
            </ul>
        );
    }
}

export default NewsList;