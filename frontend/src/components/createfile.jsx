import React, { useRef } from 'react'
import { createFile } from '../services/createFile';
import { useDispatch, useSelector } from 'react-redux';
import { searchCar } from '../services/searchCar';
import { saveAllData } from '../redux/slice/data.slice';

function CreateFile() {
    const data = useSelector((state) => state.data);
    const dis = useDispatch();
    const fileRef = useRef();
    const selectFile = () => {
        fileRef.current.click();
    }
    const inputHandler = async () => {
        try {
            const file = fileRef.current.files[0];
            await createFile(data.platenumber, file);
            const carData = await searchCar(data.platenumber)
            dis(saveAllData(carData))
        } catch (error) {
            alert("file upload failed", error);
        }
    }
    return (
        <div className='my-[20px]'>
            <button className='bg-[#238] p-[7px_15px] text-[#fff] rounded-md cursor-pointer'
                onClick={selectFile}>Şəkil və ya video əlavə et</button>
            <input
                type="file"
                className='hidden'
                ref={fileRef}
                onChange={inputHandler}
            />
        </div>
    )
}

export default CreateFile