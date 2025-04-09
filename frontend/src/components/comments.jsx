import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { dateFormat } from '../utils/dateFormat'
import { createComment } from '../services/createComment';
import { searchCar } from '../services/searchCar';
import { saveAllData } from '../redux/slice/data.slice';

function Comments() {
    const commentRef = useRef();
    const dis = useDispatch();
    const data = useSelector((state) => state.data);
    const formSubmit = async function (e) {
        console.log();

        e.preventDefault();
        try {
            await createComment(data.platenumber, {
                "comment": commentRef.current.value,
            })
            const carData = await searchCar(data.platenumber)
            dis(saveAllData(carData))
        } catch (error) {
            console.log("comment create failed", error);

        }
    }
    return (
        <div className='grid grid-cols-3 my-[50px]'>
            <div className='col-span-2 flex flex-col gap-4 '>
                {
                    data.commentList?.length ?
                        data.commentList.map((item) => {
                            return (
                                <div key={item.id}>
                                    <p>{item.comment}</p>
                                    <p>{dateFormat(item.createdAt)}</p>
                                </div>)
                        }) :
                        <p>No comments yet</p>
                }
            </div>
            <form className='col-span-1 w-full'
                onSubmit={formSubmit}>
                <textarea className='w-full bg-amber-50 border rounded-md outline-none p-[20px]'
                    ref={commentRef}></textarea>
                <button class="bg-[#4598] text-[#fff] p-[8px_20px] active:shadow-md cursor-pointer">create comment</button>
            </form>
        </div>
    )
}

export default Comments