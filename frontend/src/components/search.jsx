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
        <div className='search-container '>
    <form onSubmit={formSubmit}>
        <input 
            type="text" 
            placeholder="00 - AA - 00"
            onChange={(event) => setNumber(event.target.value)}
            className=' Section'
        />
        <button 
            type="submit"
        >
            Search
        </button>
    </form>
</div>
    )
}

export default Search