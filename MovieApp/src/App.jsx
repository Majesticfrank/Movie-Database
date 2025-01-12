// import React from 'react'
// import { MovieProvider } from './components/MovieContex'
// import Search from './components/Search'
// import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
// import Navbar from './components/Navbar'
// import Contact from './components/Contact'
// import About from './components/About'
// function App() {
 

//   return (
//     <Router>  
//       <Navbar />
//       <Routes>
//        < Route
//        path="/Search"
//        element={
//     <MovieProvider>
//       <Search />
//     </MovieProvider>
//        }

// />
// <Route path='/Contact' element={<Contact />} />
// <Route path='/About' element={<About />} />
  
//     </Routes>
//     </Router>
//   )
// }

// export default App

import React from 'react';
import { MovieProvider } from './components/MovieContex';
import Search from './components/Search';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
      
        <Route
          path="/Search"
          element={
            <MovieProvider>
              <Search />
            </MovieProvider>
          }
        />

<Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
