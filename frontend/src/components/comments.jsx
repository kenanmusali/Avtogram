import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { dateFormat } from '../utils/dateFormat'
import { createComment } from '../services/createComment'
import { searchCar } from '../services/searchCar'
import { saveAllData } from '../redux/slice/data.slice'

function Comments() {
    const commentRef = useRef()
    const dis = useDispatch()
    const data = useSelector((state) => state.data)

    const formSubmit = async function (e) {
        e.preventDefault()
        try {
            await createComment(data.platenumber, {
                "comment": commentRef.current.value,
            })
            const carData = await searchCar(data.platenumber)
            dis(saveAllData(carData))
            commentRef.current.value = '' 
        } catch (error) {
            console.log("comment create failed", error)
        }
    }

    return (
        <div className='comments-container'>
            <form className='comment-form' onSubmit={formSubmit}>
                <textarea 
                    className='comment-textarea'
                    ref={commentRef}
                    placeholder='Write your comment here...'
                ></textarea>
                <button className='comment-button Section'>Post Comment</button>
            </form>

            <div className='comments-list Section'>
                {data.commentList?.length ? (
                    data.commentList.map((item) => (
                        <div key={item.id} className='comment-item'>
                            <p className='comment-text'>{item.comment}</p>
                            <p className='comment-date'>{dateFormat(item.createdAt)}</p>
                        </div>
                    ))
                ) : (
                    <p className='no-comments'>No comments yet. Be the first to comment!</p>
                )}
            </div>
        </div>
    )
}

export default Comments