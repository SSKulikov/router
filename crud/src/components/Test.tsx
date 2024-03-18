import { useNavigate } from "react-router-dom"

export const Test = () => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/')
    }
    
    return (
        <div>
            <p>aaa</p>
            <button onClick={handleClick}>Перейти на главную</button>
        </div>
    )
}