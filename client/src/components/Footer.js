import React, {Component, Fragment} from 'react';


class Footer extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }


  render(){

    if(!this.props.width){
      return null;
    }

    if(this.props.width <= 850){
      return (
        <Fragment>
        <div className="footer-container-mobile">
          <div className="footer">
            <ul>
            <li><a href="https://www.toolstop.co.uk/contact-us">Contact us</a></li>
            <li><a href="https://www.toolstop.co.uk/frequently-asked-questions">Help</a></li>
            <li><a href="https://www.toolstop.co.uk/brands">Shopping</a></li>
            <li><a href="https://www.toolstop.co.uk/delivery">Delivery</a></li>
            <li><a href="https://www.toolstop.co.uk/frequently-asked-questions">Opening hours</a></li>
            <li><a href="https://www.toolstop.co.uk/finance">Finance</a></li>
            </ul>
          </div>
        </div>
        </Fragment>
      )
    }

    return (
      <Fragment>
      <div className="footer-container-desktop">
      <div className="footer">
        <div className="footer-headers">
        <p className="footer-headers-text">Contact us</p>
          <ul className="footer-items">
            <li><a href="tel:08001078665">0800 107 8665</a></li>
            <li><a href="tel:01698819000">01698 819 000</a></li>
            <li><a href="mailto:info@toolstop.co.uk">info@toolstop.co.uk</a></li>
          </ul>
          </div>
          <div className="footer-headers">
        <p className="footer-headers-text">Help</p>
          <ul className="footer-items">
            <li><a href="https://www.toolstop.co.uk/about-us">About us</a></li>
            <li><a href="https://www.toolstop.co.uk/contact-us">Contact us</a></li>
            <li><a href="https://www.toolstop.co.uk/customer-services">Customer services</a></li>
            <li><a href="https://www.toolstop.co.uk/frequently-asked-questions">FAQs</a></li>
            <li><a href="https://www.toolstop.co.uk/showroom">Showroom</a></li>
          </ul>
          </div>
          <div className="footer-headers">
        <p className="footer-headers-text">Shopping</p>
          <ul className="footer-items">
            <li><a href="https://www.toolstop.co.uk/blog">Blog</a></li>
            <li><a href="https://www.toolstop.co.uk/brands">Shop by brand</a></li>
            <li><a href="https://www.toolstop.co.uk/terms-and-conditions">Terms and Conditions</a></li>
            <li><a href="https://www.toolstop.co.uk/privacy-policy">Privacy notice</a></li>
            <li><a href="https://www.toolstop.co.uk/accessiblity">Accessiblity</a></li>
            <li><a href="https://www.toolstop.co.uk/competitions">Competitions</a></li>
            <li><a href="https://www.toolstop.co.uk/toolstop-rewards">Toolstop Rewards</a></li>
          </ul>
          </div>
          <div className="footer-headers">
        <p className="footer-headers-text">Delivery</p>
          <ul className="footer-items">
            <li><a href="https://www.toolstop.co.uk/track-your-order">Track your order</a></li>
            <li><a href="https://www.toolstop.co.uk/delivery">Delivery and Collection</a></li>
            <li><a href="https://www.toolstop.co.uk/returns">Returns and refunds</a></li>
          </ul>
          </div>
          <div className="footer-headers">
        <p className="footer-headers-text">Opening hours</p>
          <ul className="footer-items">
            <li><a href="https://www.toolstop.co.uk/frequently-asked-questions">Monday - Friday 8am - 5pm</a></li>
          </ul>
          </div>
          <div className="footer-headers">
        <p className="footer-headers-text">Finance</p>
          <ul className="footer-items">
            <li><a href="https://www.toolstop.co.uk/finance">Finance options</a></li>
            <li><a href="https://www.toolstop.co.uk/ways-to-pay">Ways to pay</a></li>
            <li><a href="https://www.toolstop.co.uk/vat">VAT information</a></li>
          </ul>
          </div>
        </div>
        </div>
      </Fragment>
    )
  }
}

export default Footer;
