/* Create a component where there's one button and when you click on it, there’s a counter displayed and it increments by one each time the button is clicked.  */

/*
Display ‘fizz’ when divisible by 3
Display ‘buzz’ when divisible by 5
Display ‘fizzbuzz’ when divisible by 3 and 5
Otherwise, continue displaying counter
e.g 1 2 fizz 4 buzz fizz 7 8 fizz buzz 11 fizz ...
*/

class Counter extends React.Component {

	state = {
		counter: 0
	}

	clickHandler = () => {
		this.setState({counter: this.state.counter + 1})

	}

	fizzbuzz = () => {
		if (this.state.counter % 3 === 0 && this.state.counter % 5 === 0) {
			return "FizzBuzz"
		}else if(this.state.counter % 3 === 0) {
			return "Fizz"
		}else if (this.state.counter % 5 === 0 ) {
			return "Buzz"
		}else {
			return ''
		}
	}
	

	render() {
		return(
			<>
				<span>{this.fizzbuzz() === '' ? this.state.counter : this.fizzbuzz() }</span>
				<button onClick={this.clickHandler}>Increase</button>
			</>
		)
	}
}
