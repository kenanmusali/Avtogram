import React from 'react'
import Files from './components/files'
import Comments from './components/comments'
import Header from './components/header'
import Docktop from './components/docktop'

function App() {

  return (
    <div className='bg-[#F4F9FE]'>
      <Header />
      <Docktop />
      <Files />
      <Comments />
    </div>
  )
}

export default App