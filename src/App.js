import React, { Component } from 'react';
import './App.css';
import Movies from './components/movies';
// import NavBar from './components/navBar';

class App extends Component {
  // state = {
  //   counters: [
  //     { id: 1, value: 4 },
  //     { id: 2, value: 0 },
  //     { id: 3, value: 0 },
  //     { id: 4, value: 0 },
  //   ],
  // };

  // handleDelete = (counterId) => {
  //   const counters = this.state.counters.filter(
  //     (counter) => counter.id !== counterId
  //   );
  //   this.setState({ counters });
  // };

  // handleIncrement = (counter) => {
  //   const counters = [...this.state.counters];
  //   const index = counters.indexOf(counter);
  //   counters[index] = { ...counter };
  //   counters[index].value++;
  //   this.setState({ counters });
  // };

  // handleDecrement = (counter) => {
  //   const counters = [...this.state.counters];
  //   const index = counters.indexOf(counter);
  //   counters[index] = { ...counter };
  //   counters[index].value--;
  //   this.setState({ counters });
  // };

  render() {
    return (
      <React.Fragment>
        {/* <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length} /> */}
        <main className="container">
          <Movies />
        </main>
      </React.Fragment >
    );
  }
}

export default App;
