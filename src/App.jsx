import { useState } from 'react'
import PageList from './components/PageList'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <header className="shadow-bottom">
      <Header></Header>
    </header>
    <PageList></PageList>
    <footer >
      <Footer />
    </footer>
    </>
  )
}

export default App
