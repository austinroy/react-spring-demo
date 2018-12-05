import React, { Component } from 'react';
import './App.css';
import { Spring  } from 'react-spring';
import Counter from './components/Counter';
import HookedComponent from './components/Hooks';

class App extends Component {
  render() {
    return (
      
        <Spring from={{ opacity: 0, marginTop: -1000 }} to={{ opacity: 1, marginTop: 0 }}>
          { props => (
            <div  className="App" style={ props }>
              <div >
                <header className="App-header" >
                    <h1>
                      This Div Slid Down and Faded In On Load
                    </h1>
                    <Counter />
                    <HookedComponent />
                  </header>
                </div>
              </div>
            )
          }
        </Spring>
    );
  }
}

export default App;
