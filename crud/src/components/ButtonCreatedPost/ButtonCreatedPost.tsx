import { Link } from "react-router-dom"
import './ButtonCreatedPost.css'

export const CreatedPost = () => {
    return (
        <div className="created-post">
            <Link className="link-created-post" to='/posts/new'> Создать пост </Link>
        </div>
    )
}