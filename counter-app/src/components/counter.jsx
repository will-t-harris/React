import React, { Component } from "react";

class Counter extends Component {
	state = {
		count: this.props.value,
	};

	handleIncrement = product => {
		this.setState({ count: this.state.count + 1 });
	};

	render() {
		console.log("props", this.props);
		return (
			<React.Fragment>
				<span className={this.getBadgeClasses()}>{this.formatCount()}</span>
				<button
					onClick={() => this.handleIncrement({ id: 1 })}
					className="btn btn-secondary btn-sm"
				>
					Increment
				</button>
			</React.Fragment>
		);
	}

	getBadgeClasses() {
		let classes = "badge m-2 badge-";
		classes += this.state.count === 0 ? "warning" : "primary";
		return classes;
	}

	formatCount() {
		const { count } = this.state; // ES6 destructuring to simplify code
		return count === 0 ? "Zero" : count;
	}
}

export default Counter;
