import { Component } from 'react';

class CVField extends Component {
	constructor(props) {
		super(props);

		this.state = {
			showInput: this.props.value === '',
		}

		this.toggleInput = this.toggleInput.bind(this);
	}

	toggleInput(event) {
		if (event.target.value !== '') this.setState({ showInput: !this.state.showInput });
	}

	render() {
		const p = this.props;

		if (this.state.showInput) {
			const inputCls = `input-${p.clsName}`;

			if (p.isTextArea) {
				return <textarea className={inputCls} value={p.value} onChange={p.handleChange} onBlur={this.toggleInput} placeholder={p.placeholder} autoFocus />
			} else {
				return <input className={inputCls} type="text" value={p.value} onChange={p.handleChange} onBlur={this.toggleInput} placeholder={p.placeholder} autoFocus />
			}
		}

		return <p className={p.clsName} onClick={this.toggleInput}>{p.value}</p>
	}
}

export default CVField;