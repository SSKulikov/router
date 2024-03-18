import { FC } from "react"
import { useNavigate } from "react-router-dom"

type TypePropsExitAction = {
    path: string 
}

export const ExitAction: FC<TypePropsExitAction> = ({path}) => {
    const navigate = useNavigate()

    const handleClickExit = () => {
        if (path == '/') {
            navigate('/')
        }
        else {
            navigate(0)
        }
        
    }

    return (
        <span className='span-x' onClick={handleClickExit}>
            X
        </span>
    )
}