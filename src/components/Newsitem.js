import React, { Component } from "react";

export class Newsitem extends Component {
  render() {
    let {title, description, imageUrl,newsUrl} = this.props
    return (
      <div className="my-3">
        

        <div className="card" style={{width: "20rem"}}>
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title.slice(0,50)}...</h5>
            <p className="card-text">{description.slice(0,65)}...
            </p>
            <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitem;
