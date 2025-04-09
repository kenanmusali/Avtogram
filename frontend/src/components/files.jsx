import React from 'react'
import { useSelector } from 'react-redux'
import { fileOrigin } from '../utils/origin';

function Files() {
    const data = useSelector((state) => state.data)
    return (
        <div className='grid grid-cols-4 gap-4'>
            {
                data.fileList?.length ?
                    data.fileList?.map(file => <div key={file.id} className='h-[350px]'>
                        {
                            file.type === "video" ? <video controls className="w-full object-cover h-[100%]">
                                <source src={`${fileOrigin}${file.filePath}`}  />
                            </video>
                                : <img className="w-full object-cover h-[100%]" src={`${fileOrigin}${file.filePath}`} alt="" />
                        }
                    </div>) :
                    <p>No files yet</p>
            }
        </div>
    )
}

export default Files