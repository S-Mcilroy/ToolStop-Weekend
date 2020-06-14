import React, {Component} from 'react';

class NavBar extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }


  render(){
    return (
      <div className="nav-bar">
      <header>
      <ul>
      <li className="navLink">
      <a href="https://www.toolstop.co.uk/power-tools/">POWER TOOLS</a>
      </li>
      <li className="navLink">
      <a href="https://www.toolstop.co.uk/hand-tools/">HAND TOOLS</a>
      </li>
      <li className='navLink'>
      <a href="https://www.toolstop.co.uk/accessories/">ACCESSORIES</a>
      </li>
      <li className="navLink">
      <a href="https://www.toolstop.co.uk/equipment/">EQUIPMENT</a>
      </li>
      <li className="navLink">
      <a href="https://www.toolstop.co.uk/clearance/">CLEARANCE</a>
      </li>
      <li className="navLink">
      <a href="https://www.toolstop.co.uk/special-offers/">SPECIAL OFFERS</a>
      </li>
      </ul>
      </header>
      </div>
    )
  }
}

export default NavBar;
