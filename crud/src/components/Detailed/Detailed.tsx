import { useNavigate, useParams } from "react-router-dom"
import { usePostId } from "../../hooks/usePostId"

import './Detailed.css'
import { Post } from "../Post/Post"
import axios from "axios"
import { useState } from "react"
import { Edit } from "../Edit/Edit"

export const Detailed = () => {
    const {id} = useParams()
    const navigate = useNavigate()

    const [edit, setEdit] = useState(false)

    const [post, loading] = usePostId(Number(id))
   
    const hundleDelete = async () => {
        try {
            const res = await axios({
                method: 'delete',
                url: `http://localhost:7070/posts/${id}`,
            })
            if (res.status != 204) {
                throw new Error(res.statusText)
            }
            navigate('/')
        }
        catch(e) {
            console.log(e)
        }
    }

    const hundleEdit = () => {
        setEdit(true)
    }

    return (
        <>
        {
            loading ? 'Загрузка...' : 
            (edit 
            ? 
            <Edit id={Number(id)} text={post.post.content} />
            :
            <>
            <Post created={post.post.created} content={post.post.content}/>
            <div className="buttons">
                    <button className="edit" onClick={hundleEdit}>Изменить</button>
                    <button className="delete" onClick={hundleDelete}>Удалить</button>
            </div>
            </>
            )
        }
        </>
    )
}