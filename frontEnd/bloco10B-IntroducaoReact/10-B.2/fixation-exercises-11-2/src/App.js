import React from 'react';
import Image from './image';
import Order from './Order';
import './App.css';

// PROPS

/* function App() {
  return (
    <main>
      <Image source = 'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg' alternativeText = 'Cute cat staring' />
    </main>
  );
} */

// COMPOSIÇÃO COMPONENTES

class App extends React.Component {
  render() {
    const headphone = {
      id: 102,
      user: "cena@gmail.com",
      product: "Razer Headphone",
      price: {
        value: 99.99,
        currency: "dollars"
      }
    };

    const energyDrink = {
      id: 77,
      user: "cena@gmail.com",
      product: "Monster 500mL",
      price: {
        value: 9.99,
        currency: "dollars"
      }
    };

    return (
      <div className="App">
        <h1> Orders recently created </h1>
         <Order orderM = { headphone }/>
         <Order orderM = { energyDrink }/>
      </div>
    );
  }
}

export default App;
