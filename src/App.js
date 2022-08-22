import { Component } from 'react'
import ListItems from './components/ListItems'
import './App.css'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			items: [],
			currentItem: {
				text: '',
				key: '',
			},
		}
	}

	handlerInput(e) {
		this.setState({
			currentItem: {
				text: e.target.value,
				key: Date.now(),
			},
		})
	}

	addSomething(e) {
		e.preventDefault()
		const newItem = this.state.currentItem
		if (newItem.text !== '') {
			const newItems = [...this.state.items, newItem]
			this.setState({
				items: newItems,
				currentItem: {
					text: '',
					key: '',
				},
			})
		}
	}

	deleteSomething = (key) => {
		const filteredItems = this.state.items.filter((el) => el.key !== key)
		this.setState({
			items: filteredItems,
		})
	}

	render() {
		return (
			<>
				<form onSubmit={this.addSomething.bind(this)} className='form'>
					<input
						type='text'
						placeholder='Enter Some Text'
						value={this.state.currentItem.text}
						onChange={this.handlerInput.bind(this)}
					/>
					<button type='submit'>Add</button>
					<ListItems
						items={this.state.items}
						deleteSomething={this.deleteSomething}
					></ListItems>
				</form>
			</>
		)
	}
}
export default App
