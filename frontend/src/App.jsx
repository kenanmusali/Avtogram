import React from 'react'
import Search from './components/search'
import Files from './components/files'
import Comments from './components/comments'
import CreateFile from './components/createfile'

function App() {

  return (
    <div className='mx-auto max-w-[1200px] w-[80%]'>
      <Search />
      <CreateFile />
      <Files />
      <Comments />
    </div>
  )
}

export default App