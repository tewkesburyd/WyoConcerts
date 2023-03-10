// import { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './pages/home';
import ConcertList from './pages/concerts';
import News from './pages/news';
import VenueList from './pages/venues';
import Login from './pages/login';
import Dashboard from './pages/dashboard';
import Concert from './pages/concert';
import 'react-calendar/dist/Calendar.css';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [user, setUser] = useState(null)

  const addRsvp = (userList) => {
    setUser({...user, user_lists: [...user.user_lists, {id: userList.id, concert_id: userList.concert.id, user_id: userList.user.id}]})
  }

  const removeRsvp = (userList) => {
    setUser({...user, user_lists: user.user_lists.filter(uList => userList.id != uList.id)})
  }

  useEffect(()=> {
    fetch(`/api/me`)
    .then(r => {
        if(r.ok){
            r.json()
            .then(data => {
                setUser(data)
            })
        } 
        })
    }, [])

  return (
    <div className="flex flex-col ">
        <div className="w-full sticky top-0 block bg-white">
          <Navbar />
        </div>
      <BrowserRouter>
        <div className="flex-1 overflow-y-scroll h-full">
          <Switch>
            <Route path='/concerts/:id' exact render={() => <Concert user={user} addRsvp={addRsvp} removeRsvp={removeRsvp} />} />
            <Route path='/concerts' exact component={ConcertList}/>
            <Route path='/venues' render={() => <VenueList user={user} />}/>
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
