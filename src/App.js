import React from 'react';
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import Header from './Components/Header'
import Routes from './Routes'
import './App.css';


function App() {
  return (
    <HashRouter>
      <Provider store={store}>
        <div className="App">
          <Header/>
          {Routes}
        </div>
      </Provider>
    </HashRouter>
  );
}

export default App;
