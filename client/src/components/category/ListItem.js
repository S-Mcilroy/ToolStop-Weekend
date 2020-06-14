import React, {Fragment} from 'react';

const ListItem = (props) => {
  if(!props.listItem){
  return "Loading..."
}

const url = "https://www.toolstop.co.uk" + props.listItem.custom_url.url;

return(
  <Fragment>
  <a href= {url} target="_blank" rel="noopener noreferrer" className="name">
      <img src={props.listItem.images[props.listItem.images.length - 1].url_standard} alt={props.listItem.name} height="200" width="200"/>
      <p className="itemName">{props.listItem.name}</p>
      <p className="itemPrice">£{(props.listItem.price * 1.20).toFixed(2)}</p>
      <p className="itemVat">£{(props.listItem.price).toFixed(2)} ex. VAT</p>
    </a>
  </Fragment>
)
}
export default ListItem;
