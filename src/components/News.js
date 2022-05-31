import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class News extends Component {

  constructor(){
    super();
    this.state ={
      articles: [],
       loading : false,
       page : 1
     
    }
  }

    async componentDidMount(){
      let url ="https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=194ccaada43a401cae3f2a9c57c9557f&page=1&pageSize=18";
      let data = await fetch(url);
      let parsed_data = await data.json();
      console.log(parsed_data)
      this.setState({articles: parsed_data.articles,totalresults:parsed_data.totalResults})

    }

    handleNextClick = async()=>{

      if(this.state.page <= this.state.totalresults/18){
      let url =`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=194ccaada43a401cae3f2a9c57c9557f&page=${this.state.page +1}&pageSize=18`;
      let data = await fetch(url);
      let parsed_data = await data.json();
      console.log(parsed_data)
      console.log(this.state.page)
      console.log(this.state.totalresults/18)

      this.setState({

        page: this.state.page +1,
        articles: parsed_data.articles
      })
    }
    else{
      document.querySelector('#next').disabled = true;

    }
    }
    handlePrevClick = async ()=>{

      let url =`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=194ccaada43a401cae3f2a9c57c9557f&page=${this.state.page -1}&pageSize=18`;
      let data = await fetch(url);
      let parsed_data = await data.json();
      console.log(parsed_data)
      this.setState({

        page: this.state.page -1,
        articles: parsed_data.articles
      })


    }
    
   
  render() {
    return (
      <div>
        <div className="container my-3">
          <h2>Top Heading -</h2>
          <div className="row">
                
                {this.state.articles.map((element)=>{
                    return <div className="col-sm" key={element.url}>
                      
                        <Newsitem title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url}/>
                    </div>
                })} 

                    <div className="container d-flex justify-content-between">
                        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
                        <button id="next" type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                        </div>
                

                </div>
              

          </div>
        </div>
          
          
      
    )
  }

}


export default News