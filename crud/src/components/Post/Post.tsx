import { useNavigate} from 'react-router-dom'
import './Post.css'
import { FC } from 'react'
import { TypePost } from '../../hooks/useCardRead'
import { handleDate } from '../../utils/handleDate'
import { ExitAction } from '../ExitAction/ExitAction'

export const Post: FC<TypePost> = ({id=0, content, created}) => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate(`/posts/${id}`)
    }

    return (
        <>
            <div className="card-post">
                {id == 0 && 
                    <ExitAction path='/'/>
                }
                <div className="profile">
                    <img className="profile-img" src="https://free-images.com/tn/11b6/blue_textil_pattern.jpg" alt="" />
                    <div className='name-date'>
                        <a className="profile-name" href="">Jhon Smith</a>
                        <p className="date">{handleDate(created)}</p>
                    </div>
                </div>
                <div className="content-post" onClick={id != 0 ? handleClick : undefined}>
                    <p className="content">
                        {content}
                    </p>
                </div>
            </div>
        </>
    )
}