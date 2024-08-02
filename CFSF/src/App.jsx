import React from 'react'
import Home from './Components/Home';
import About from './Components/About';
import Board from './Components/Board'
import Manage from './Components/Manage'
import Team from './Components/Team'
import Thematic from './Components/Thematic'
import Contact from './Components/Contact';
import Media from './Components/Media'
import {Routes , Route} from 'react-router-dom';
import Video from './Components/Video';
import News from './Components/News';
import Gallery from './Components/Gallery'
import Access from './Components/Access'
import Gender from './Components/Gender'
import Safe from './Components/Safe'
import Govern from './Components/Govern'
import Trade from './Components/Trade'
import Tax from './Components/Tax'
import Profile from './Components/Profile';



const App= () => {

  return (
  <Routes>
     <Route path="/profile/:id" element={<Profile />} />
    <Route path='/' element={<Home />} />
    <Route path='/Tax' element={<Tax />} />
    <Route path='/About' element={<About />} />
    <Route path='/Board' element={<Board/>} />
    <Route path='/Manage' element={<Manage/>} />
    <Route path='/Team' element={<Team/> }/>
    <Route path='/Contact' element={<Contact />} />
    <Route path='/Video' element={<Video />} />
    <Route path='/News' element={<News />} />
    <Route path='/Gallery' element={<Gallery />} />
    <Route path='/Media/' element={<Media />} />
    <Route path='/Thematic' element={<Thematic/>} />
    <Route path='/Access' element={<Access />} />
    <Route path='/Gender' element={<Gender />} />
    <Route path='/Govern' element={<Govern />} />
    <Route path='/Safe' element={<Safe />} />
    <Route path='/Trade' element={<Trade />} />
  </Routes>
  )
}

export default App