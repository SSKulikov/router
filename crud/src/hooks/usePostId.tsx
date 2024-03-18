import axios from "axios"
import { useEffect, useState } from "react"
import { TypePost } from "./useCardRead"

type TypeAnswerUsePostId = {
    post: TypePost
}

export const usePostId = (id: number): [TypeAnswerUsePostId, boolean] => {
    const [post, setPost] = useState<TypeAnswerUsePostId>({post: {id: 0, content: '', created: 0}})
    const [loading, setLoading] = useState<boolean>(false)
     

    useEffect(() => {
        const axiosRequest = async () => {
            setLoading(true)
            try {
                const res = await axios.get(`http://localhost:7070/posts/${id}`)
                const answer = res.data
                if (res.status != 200) {
                    throw new Error(res.statusText)
                }
                setPost(answer)
            }
            catch(e) {
                console.log(e)
            }
            finally {
                setLoading(false)
            }
        }
        axiosRequest()
    }, [])
    
    

    return [post, loading]
}