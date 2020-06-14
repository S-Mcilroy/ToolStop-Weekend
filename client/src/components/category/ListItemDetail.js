import React, {Component} from 'react';
import ListItem from "./ListItem";

class ListItemDetail extends Component {
  constructor(props){
    super(props)
    this.state = {
      listItem: this.props.listItem
    }
  }

  componentDidMount(){
    window.scrollTo(0, 0);
  }

  render(){
    if(!this.props.listItem){
      return "loading..."
    }
    return (
      <div className = "list-item">
        <ListItem listItem = {this.props.listItem}/>
      </div>
    )
  }
}

export default ListItemDetail;
