import React, { Component } from "react";

class Form extends Component {
	constructor(props) {
		super(props);

		this.initialState = {
			name: "",
			job: "",
		};

		this.state = this.initialState;
	}

	handleChange = event => {
		//runs every time a change is made to an input, passes through event, sets state of Form to have name and value inputs
		const { name, value } = event.target;

		this.setState({
			[name]: value,
		});
	};

	submitForm = () => {
		this.props.handleSubmit(this.state); // pass through Form state as character parameter in handleSubmit
		this.setState(this.initialState); // reset to the initial state to clear the form after submit
	};

	render() {
		const { name, job } = this.state; // store our two properties from state

		return (
			<form>
				<label>Name</label>
				<input
					type="text"
					name="name"
					value={name} // assign state value for name
					onChange={this.handleChange}
				/>
				<label>Job</label>
				<input
					type="text"
					name="job"
					value={job} // assign state value for job
					onChange={this.handleChange}
				/>
			</form>
		);
	}
}

export default Form;
