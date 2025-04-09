import React from 'react'
import CreateFile from './createfile'
import Search from './search'
import Rankings from './rankings'
import LatestPost from './latestpost'

const Docktop = () => {
    return (
        <div className='docktop'>
            <Rankings />
            <LatestPost />
            <Search />
            <CreateFile />
        </div>
    )
}

export default Docktop