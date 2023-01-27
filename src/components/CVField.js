import { Component } from 'react';

class CVField extends Component {
	constructor(props) {
		super(props);

		this.state = {
			showInput: this.props.value === '',
		}

		this.handleBlur = this.handleBlur.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	handleBlur(event) {
		if (event.target.value !== '') this.setState({ showInput: false });
	}

	handleClick(event) {
		this.setState({ showInput: true });
	}

	render() {
		const p = this.props;

		if (this.state.showInput) {
			const inputCls = `input-${p.clsName}`;

			if (p.isTextArea) {
				return <textarea className={inputCls} value={p.value} onChange={p.handleChange} onBlur={this.handleBlur} placeholder={p.placeholder} autoFocus />
			} else {
				return <input className={inputCls} type="text" value={p.value} onChange={p.handleChange} onBlur={this.handleBlur} placeholder={p.placeholder} autoFocus />
			}
		}

		return <p className={p.clsName} onClick={this.handleClick}>{p.value}</p>
	}
}

export default CVField;