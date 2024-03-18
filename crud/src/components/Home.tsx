import { useCardRead } from "../hooks/useCardRead"
import { CreatedPost } from "./ButtonCreatedPost/ButtonCreatedPost"
import { Post } from "./Post/Post"

export const Home = () => {
    const [data, loading] = useCardRead({url: 'http://localhost:7070/posts'})
    
    return (
        <>
            <h1>Главная страница</h1>
            <CreatedPost />
            {loading ? 'Загрузка...' 
            :
            <div className="post-list">
                {data.map((post, i) => (
                    <Post key={i} id={post.id} content={post.content} created={post.created}/>
                ))}
            </div>
            }
            
        </>
    )
}