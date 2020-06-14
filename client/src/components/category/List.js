import React, {Fragment, Component} from 'react';
import ListItemDetail from "./ListItemDetail";

class List extends Component {
		constructor(props){
			super(props)
			this.state = {
				filterbrand: "",
				brands: [],
				min: null,
				max: null,
				maxValue: "",
				minValue: ""
			}
			this.handleChangeBrand = this.handleChangeBrand.bind(this);
			this.handleChangeMax = this.handleChangeMax.bind(this);
			this.handleChangeMin = this.handleChangeMin.bind(this);
			this.handleClick = this.handleClick.bind(this);
		}

		componentDidMount(){
			const brandNames = this.props.topItems.map((listItem,index) => {
			return listItem.name.replace(/ .*/,'');})
			const brands = Array.from(new Set(brandNames))
			this.setState({brands: brands})
		}

		handleChangeBrand(event){
			this.setState({filterbrand: event.target.value})
		}

		handleChangeMin(event){
			if (!this.state.max){
			  const allPrices = this.props.topItems.map(item => item.price)
				this.setState({max: Math.max(...allPrices)})
			}
			this.setState({
				min: event.target.value,
				minValue: event.target.value
			})
		}

		handleChangeMax(event){
			if (!this.state.min){
				this.setState({min: 0})
			}
			this.setState({
				max: event.target.value,
				maxValue: event.target.value
			})
		}

		handleClick(event){
			this.setState({
				max: null,
				min: null,
				filterbrand: "",
				maxValue: "",
				minValue: ""
			})
		}

		render(){

			const topItems = this.props.topItems.filter(item => item.name.replace(/ .*/,'').includes(this.state.filterbrand)).map((listItem, index) => {
				if (!this.state.max && !this.state.min){
					return (
						<li key={index} className="list-item">
							<div className="component">
								<ListItemDetail listItem={listItem}/>
							</div>
						</li>
					)
				} else if (listItem.price*1.20 >= this.state.min && listItem.price*1.20 <= this.state.max) {
					return (
					<li key={index} className="list-item">
							<div className="component">
								<ListItemDetail listItem={listItem}/>
							</div>
						</li>
					)
				}

			})

			if (this.props.selectedBrand){
				return (
					<Fragment>
					<div className="header-text">
						<h1> Top {this.props.topItems.length} {this.props.selectedBrand} Items </h1>
						<button onClick={this.props.handleBack}>BACK</button>
					</div>
					<div className="filter">
						<h4>Filter by price</h4>
						<label>Min(£):</label>
						<input type="number" name="price" onChange={this.handleChangeMin} value={this.state.minValue} required min='0' placeholder=""/>
						<label>Max(£):</label>
						<input type="number" name="price" onChange={this.handleChangeMax} value={this.state.maxValue} required min='0' placeholder=""/>
						<button className="clear-filter" onClick={this.handleClick}>Clear filters</button>
					</div>
					<ul className="item-list">
						{topItems}
					</ul>
					</Fragment>
				)
			}

			const brandOptions = this.state.brands.map((brand, index) => {
				return <option key={index} value={brand}>{brand}</option>
				})

			return (
				<Fragment>
				<div className="header-text">
					<h1> Top {this.props.topItems.length} {this.props.selectedBrand} Items </h1>
					<button onClick={this.props.handleBack}>BACK</button>
				</div>
				<div className="filter">
					<h4>Filter by brand</h4>
					<select className="custome-select" name="brand" value={this.state.filterbrand} onChange={this.handleChangeBrand}>
						<option value="">All Brands</option>
							{brandOptions}
					</select>
					<h4>Filter by price</h4>
					<label>Min(£):</label>
					<input type="number" name="price" onChange={this.handleChangeMin} value={this.state.minValue} required min='0' placeholder=""/>
					<label>Max(£):</label>
					<input type="number" name="price" onChange={this.handleChangeMax} value={this.state.maxValue} required min='0' placeholder=""/>
					<button className="clear-filter" onClick={this.handleClick}>Clear filters</button>
				</div>
				<ul className="item-list">
					{topItems}
				</ul>
				</Fragment>
			)
		}

}
export default List;
