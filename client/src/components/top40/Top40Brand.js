import React, {Component} from 'react';
import Top20Brand from "./Top20Brand.js"

class Top40Brand extends Component {
  constructor(props){
    super(props)
    this.state = {
      brands: ["Makita", "Dewalt", "Hikoki", "Bosch", "Bahco", "Metabo", "Stanley", "Evolution"]
    }
  }


  render(){
    return (
      <div className = "splash-images">
        <div className="top40banner">
          <a href="/" onClick={this.props.handleClick}>
          <img alt="top 40 banner" src="../images/top-40-banner.png"/>
          </a>
          </div>
        <Top20Brand brands={this.state.brands} handleClick={this.props.handleClick}/>
      </div>
    )
  }
}

export default Top40Brand;
