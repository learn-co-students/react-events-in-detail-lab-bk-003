const React = require('react')

class CoordinatesButton extends React.Component {
	constructor(props) {
		super(props);
		
		this.handleClick = this.handleClick.bind(this)
	}	

	handleClick(event) {
		let coords = [event.clientX, event.clientY];
		this.props.onReceiveCoordinates(coords);
	}

	render() {
		return (
			<button onClick={this.handleClick}></button>
		)
	}

}

module.exports = CoordinatesButton;