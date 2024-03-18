import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import './CreatedPost.css'
import { ExitAction } from "../ExitAction/ExitAction"

export const CreatedPost = () => {
    const [form, setForm] = useState<string>('')
    const [value, setValue] = useState<string>('')

    const navigate = useNavigate()

    useEffect(() => {
            try {
                if (!form) {
                    return
                }
                axios({
                    method: 'post',
                    url: 'http://localhost:7070/posts',
                    data: {
                        'content': form
                    }
                })
                .then(data => {
                    if (data.status == 204) {
                        navigate('/')
                    }
                    else {
                        throw new Error(data.statusText)
                    }
                })
            }
            catch(e) {
                console.log(e)
            }
    }, [form])

    const hundleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()
        if (form != value) {
            setForm(value)
        }
    }

    const hundleChange: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
        const {target:{value}} = e
        setValue(value)
    }

    return (
        <form className="form" onSubmit={hundleSubmit}>
            <ExitAction path="/"/>
            <h3>Создание</h3>
            <textarea className="text-post" name="text-post" id="" cols={30} rows={10} onChange={hundleChange}>

            </textarea>
            <button>Отправить</button>
        </form>
    )
}