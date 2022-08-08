import logo from './logo.svg';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { Suspense, lazy } from 'react'
import './App.css';

import MangagePage from './Pages/ManagePage';

function App() {
  return (
    <Router>
    <Suspense fallback={<h1>Loading...</h1>}>
     
      <Switch>
        <Route component={MangagePage} path='/' exact />
  
      </Switch>

      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <ToastContainer />
    </Suspense>
  </Router>
  );
}

export default App;
