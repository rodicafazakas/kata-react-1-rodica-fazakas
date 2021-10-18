import logo from './logo.svg';
import './App.css';
import Circle from './Circle.js';

function App() {
  const numbers = [1,2,3,4,5];
  return (
      <>   
        { numbers.map( number => (<Circle key={number}> </Circle>) )  }
      </>
  );
};

export default App;