import { Component } from 'react';

class CVField extends Component {
	constructor(props) {
		super(props);

		this.state = {
			showInput: false,
		}

		this.toggleInput = this.toggleInput.bind(this);
	}

	toggleInput() {
		this.setState({ showInput: !this.state.showInput });
	}

	render() {
		const p = this.props;

		if (this.state.showInput) {
			const inputCls = `input-${p.clsName}`;

			if (p.cols !== undefined && p.rows !== undefined) {
				return <textarea className={inputCls} cols={p.cols} rows={p.rows} value={p.value} onChange={p.handleChange} onBlur={this.toggleInput} autoFocus />
			} else {
				return <input className={inputCls} type="text" value={p.value} onChange={p.handleChange} onBlur={this.toggleInput} autoFocus/>
			}
		}

		return <p className={p.clsName} onClick={this.toggleInput}>{p.value}</p>
	}
}

export default CVField;