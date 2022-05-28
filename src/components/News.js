import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class News extends Component {

  constructor(){
    super();
    this.state ={
      articles: [],
       loading : false
    }
  }

    async componentDidMount(){
      let url ="https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=194ccaada43a401cae3f2a9c57c9557f";
      let data = await fetch(url);
      let parsed_data = await data.json();
      console.log(parsed_data)
      this.setState({articles: parsed_data.articles})

    }
    
   
  render() {
    return (
      <div>
        <div className="container my-3">
          <h2>Top Heading -</h2>
          <div className="row">
                
                {this.state.articles.map((element)=>{
                    return <div className="col-md-4" key={element.url}>
                        <Newsitem title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url}/>
                    </div> 
                })} 
                

                </div>
              

          </div>
        </div>
          
          
      
    )
  }

}


export default News