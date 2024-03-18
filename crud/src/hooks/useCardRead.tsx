import axios from "axios"
import { useEffect, useState } from "react"

type TypePropUseCardRead = {
    url: string
}

export type TypePost = {
    id?: number
    content: string
    created: number
}

export const useCardRead = ({url}: TypePropUseCardRead): [TypePost[], boolean] => {
    const [posts, setPosts] = useState<TypePost[]>([])
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        const axiosRequest = async () => {
            setLoading(true)
            try {
                const res = await axios.get(url)
                const answer = res.data
                if (res.status != 200) {
                    throw new Error(res.statusText)
                }
                setPosts(answer)
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

    return [posts, loading]
}