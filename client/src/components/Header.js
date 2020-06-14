import React, {Component} from 'react';
import NavBar from "./NavBar.js"

class Header extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }


  render(){

    return (
      <div className = "header-item">
        <div className ="help-information-container">
          <div className ="help-information">
            <p>Tel: <a href="tel:08001078665">0800 107 8665</a> / <a href="tel:01698819000">01698 819 000</a></p>
            <ul>
              <li><a href="https://www.toolstop.co.uk/about-us">About us</a></li>
              <li><a href="https://www.toolstop.co.uk/blog">Blog</a></li>
              <li><a href="https://www.toolstop.co.uk/customer-services">Customer services</a></li>
              <li><a href="https://www.toolstop.co.uk/login">Track Order</a></li>
            </ul>
          </div>
        </div>
        <a className = "klarna" href="https://www.toolstop.co.uk/tools-on-finance">
            <p className="klarna-interest">3 months interest-free payments with</p>
            <img alt="klarna-logo" className="klarna-logo" src="https://x.klarnacdn.net/payment-method/assets/badges/generic/black/klarna.svg"/>
            <p className="klarna-find-out-more">Find out more</p>
        </a>
        <div className = "header-logo-container">
          <a href="https://www.toolstop.co.uk">
          <img alt="toolstop logo" className = "header-logo" src="../images/toolstop-logo.png"/>
          </a>
        </div>
        <NavBar/>
        <div className = "header-links">
          <a href="https://www.toolstop.co.uk/delivery"><img alt="Free Delivery Orders > £99" src="https://cdn11.bigcommerce.com/s-tod2uy9g96/product_images/uploaded_images/usp-delivery.png?t=1575301748&amp;_ga=2.134744497.1906462864.1575272837-379394622.1575272837"/>
            <p>FREE Delivery on orders over £99</p>
          </a>
          <a href="https://www.toolstop.co.uk/delivery"><img alt="Two Working Day Delivery" src="https://cdn11.bigcommerce.com/s-tod2uy9g96/product_images/uploaded_images/usp-nextday.png?t=1575301749&amp;_ga=2.130367951.1906462864.1575272837-379394622.1575272837"/>
            <p>2 Working Day Delivery</p>
          </a>
          <a href="https://www.toolstop.co.uk/tools-on-finance"><img alt="Finance Available over £150" src="https://cdn11.bigcommerce.com/s-tod2uy9g96/product_images/uploaded_images/usp-finance.png?t=1575301749&amp;_ga=2.209134674.1906462864.1575272837-379394622.1575272837"/>
            <p>Finance Available over £150</p>
          </a>
          <a href="https://www.toolstop.co.uk/returns"><img alt="Free 60 Day Returns" src="https://cdn11.bigcommerce.com/s-tod2uy9g96/product_images/uploaded_images/usp-returns.png?t=1575301750&amp;_ga=2.205458768.1906462864.1575272837-379394622.1575272837"/>
            <p>FREE 60 Day Returns</p>
          </a>
        </div>
      </div>
    )
  }
}

export default Header;
