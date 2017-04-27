import React, { Component } from 'react';
import Hero from './Components/Hero';
import Footer from './Components/Footer';

const links = [
  'https://instagram.com/cristiflorea1110/',
  'https://twitter.com/yoloOnTheBF',
  'https://github.com/yoloOnTheBattlefield',
  'http://codepen.io/yoloonthebf/',
  'https://linkedin.com/in/cristian-florea-396046123/'
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hero />
        <Footer links={links} day={1} />
      </div>
    );
  }
}

export default App;
