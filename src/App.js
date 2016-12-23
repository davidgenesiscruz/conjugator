import React, { Component } from 'react';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			input: ''
		};
	}

	render() {
		return (
			<div className="App">
			<h2>Conjugação do Verbos Brasileiros</h2>
		<Input />
		<table>
			<tr>
				<th>Pessoa</th>
			<th>Presente</th>
			<th>Pretérito perfeito</th>
			<th>Pretérito imperfeito</th>
			</tr>
			<tr>
				<td>Eu</td>
			<td></td>
			<td></td>
			<td></td>
			</tr>
			<tr>
				<td>Voce</td>
			<td></td>
			<td></td>
			<td></td>
			</tr>
			<tr>
				<td>Ele</td>
			<td></td>
			<td></td>
			<td></td>
				</tr>
			<tr>
				<td>Nos</td>
			<td></td>
			<td></td>
			<td></td>
			</tr>
			<tr>
				<td>Voces</td>
			<td></td>
			<td></td>
			<td></td>
			</tr>
			<tr>
				<td>Eles</td>
			<td></td>
			<td></td>
			<td></td>
			</tr>
		</table>
			</div>
		);
	}
}

class Input extends Component {
	render() {
		return (
			<input type="text" placeholder="Digite o verbo" onInput={(value) => this.handleInput(value)}>{this.props.value}</input>
		);
	}

	handleInput(value) {
		console.log(value);
	}
}

export default App;
