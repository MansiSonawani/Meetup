import { useState } from 'react';
import { Route } from 'react-router-dom';
import AllMeetupsPage from './pages/allmeetups';
import FavouritesPage from './pages/Favourites';
import NewMeetupPage from './pages/NewMeetups';


function App() {
  

  return (
    <div>
      {/* Render AllMeetupsPage component at root path */}

      <Route path='/'>
        <AllMeetupsPage />
      </Route>

      <Route exact path='/new-meetups' component ={NewMeetupPage}/>
      <Route exact path='/favourites' component ={FavouritesPage}/>
      
      
    </div>
  
  )
}

export default App
