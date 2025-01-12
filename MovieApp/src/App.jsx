

import React from 'react';
import { MovieProvider } from './components/MovieContex';
import Search from './components/Search';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
      
        <Route
          path="/"
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
