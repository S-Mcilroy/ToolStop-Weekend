import React, {Fragment}  from 'react';

const Top20Brand = (props) => {
		if (!props.brands){
			return (<p>Loading...</p>)
		}

		const top20Items = props.brands.map((brandName, index) => {
      const url = "../images/top-20-logos-" + brandName + ".png"
			return (
        <Fragment key={index}>
          <a key={index} href="/" onClick={props.handleClick}>
				    <img alt={brandName} name={brandName} src={url}/>
          </a>
        </Fragment>
			)
		})

		return (
      <div className="top20banner">
			   <ul className="component-list">
			      {top20Items}
			   </ul>
      </div>
		)
}
export default Top20Brand;
