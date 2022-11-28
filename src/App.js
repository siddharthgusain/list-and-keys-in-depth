import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const numbers = [1, 2, 3, 4, 5];
    const listItems = numbers.map((number, index) => {
      return <li key={number.toString()}>{number}</li>
    });

    console.log(listItems); // array of object which represents component returned from React.createElement() call
    return (
      <div className="App" >
        <ul>
          {listItems}
        </ul>
      </div>
    );
  }
}

export default App;
