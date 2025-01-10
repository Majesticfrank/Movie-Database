import React from 'react'
import { MovieProvider } from './components/MovieContex'
import Search from './components/Search'

function App() {
 

  return (
    <MovieProvider>
      <Search />
      
    </MovieProvider>
   
  )
}

export default App
