import React, { useRef } from 'react'
import { createFile } from '../services/createFile'
import { useDispatch, useSelector } from 'react-redux'
import { searchCar } from '../services/searchCar'
import { saveAllData } from '../redux/slice/data.slice'

function CreateFile() {
    const data = useSelector((state) => state.data)
    const dis = useDispatch()
    const fileRef = useRef()

    const selectFile = () => {
        fileRef.current.click()
    }

    const inputHandler = async () => {
        if (!data.platenumber) {
            alert("Plate number is missing. Please search for a car first.")
            return
        }
        try {
            const file = fileRef.current.files[0]
            if (!file) {
                alert("No file selected. Please choose a file to upload.")
                return
            }
            await createFile(data.platenumber, file)
            const carData = await searchCar(data.platenumber)
            dis(saveAllData(carData))
        } catch (error) {
            alert("File upload failed", error)
        }
    }

    return (
        <button onClick={selectFile} className="upload-button Section">
            <input
                type="file"
                ref={fileRef}
                onChange={inputHandler}
                className="file-input"
            />
        </button>


    )
}

export default CreateFile
