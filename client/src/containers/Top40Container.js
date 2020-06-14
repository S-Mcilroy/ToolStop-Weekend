import React, {Component, Fragment} from 'react';
import Top40Brand from '../components/top40/Top40Brand';
import List from '../components/category/List';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js'

class Top40Container extends Component {
  constructor(props){
    super(props);
    this.state = {
      topItems: null,
      selectedBrand: null,
      width: 0,
      height: 0
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleBack = this.handleBack.bind(this);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

    componentDidMount(){
      this.updateWindowDimensions();
      window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
      this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    handleClick(event){
      event.preventDefault();
      this.setState({selectedBrand: null, topItems: null})
      this.setState({selectedBrand: event.target.name})
      fetch('https://product-fetch-toolstop.herokuapp.com/top40/' + event.target.name)
      .then(res=> res.json())
      .then(data => {this.setState({ topItems: data.data })})
      .catch(err => console.error)
    }

    handleBack(event){
      event.preventDefault();
      this.setState({selectedBrand: null, topItems: null})
    }

  render(){

    if(this.state.topItems){
    return (
      <Fragment>
        <Header/>
        <div className="content">
          <List topItems={this.state.topItems} handleBack={this.handleBack} selectedBrand={this.state.selectedBrand}/>
        </div>
        <Footer width={this.state.width}/>
      </Fragment>
    )
  }
      return(
        <Fragment>
          <Header/>
          <Top40Brand handleClick={this.handleClick}/>
          <Footer width={this.state.width}/>
        </Fragment>
      )
  }

}
export default Top40Container;
