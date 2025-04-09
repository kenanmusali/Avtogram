import React, { useEffect, useState } from 'react'
import { searchCar } from '../services/searchCar';
import { useDispatch } from 'react-redux';
import { saveAllData } from '../redux/slice/data.slice';

function Search() {
    const [number, setNumber] = useState("");
    const dis = useDispatch();
    useEffect(() => {
        searchCar("77GX084")
            .then(data => dis(saveAllData(data)))
    }, [])

    const formSubmit = (e) => {
        e.preventDefault();
        searchCar(number.toUpperCase())
            .then(data => dis(saveAllData(data)))
            .catch(err => dis(saveAllData({
                platenumber: err.response.data.platenumber,
                fileList: [],
                commentList: []
            })))
    }
    return (
        <div className='flex justify-center items-center my-[50px]'>
            <form onSubmit={formSubmit}>
                <input type="text" placeholder="Search..."
                    onChange={(event) => setNumber(event.target.value)}
                    className='border-2 border-gray-300 rounded-md p-2 mr-2 w-[300px]'
                />
                <button type="submit"
                    className='bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600 transition duration-300 ease-in-out'
                >Search</button>
            </form>
        </div >
    )
}

export default Search