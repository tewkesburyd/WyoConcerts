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
import Concert from './pages/concert';

import './App.css';

function App() {

  return (
    <div className="flex flex-col h-screen md:justify-between">
      <BrowserRouter>
        <div className="sticky top-0 ">
          <Navbar />
        </div>
        <div className="">
          <Switch>
            <Route path='/concerts/:id' exact component={Concert} />
            <Route path='/concerts' exact component={ConcertList}/>
            <Route path='/venues' component={VenueList}/>
            <Route path='/news' component={News}/>
            <Route path='/login' component={Login}/>
            <Route path='/dashboard' component={Dashboard}/>
            <Route path='/' exact component={Home} />
          </Switch>
        </div>
        <div className="fixed inset-x-0 bottom-0 mt-auto">
        <Footer className=""/>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
