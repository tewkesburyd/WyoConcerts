// import { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './pages/home';
import ConcertList from './pages/concerts_list';
import News from './pages/news';
import VenueList from './pages/venues_list';
import Login from './pages/login';
import Dashboard from './pages/dashboard';

import './App.css';

function App() {

  return (
    <div>
      <BrowserRouter>
          <Navbar />
          <Switch>
            <Route path='/concerts' component={ConcertList}/>
            <Route path='/venues' component={VenueList}/>
            <Route path='/news' component={News}/>
            <Route path='/login' component={Login}/>
            <Route path='/dashboard' component={Dashboard}/>
            <Route path='/' exact component={Home} />
          </Switch>
          <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
