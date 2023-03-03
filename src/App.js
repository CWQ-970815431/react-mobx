import './App.css';

import store from './store';

import { Provider } from 'react-redux';

import Router from './routes'

import Nav from './layout/Nav'

function App() {
 

  return (
    <Provider store={store}>
      <div className="content-body">
              <Nav/>
              <Router   />
          </div>
    </Provider>
   
  );
}

export default App;
