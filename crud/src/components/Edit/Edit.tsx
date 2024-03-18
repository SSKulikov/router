import axios from "axios"
import { FC, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import './Edit.css'
import { ExitAction } from "../ExitAction/ExitAction"

type TypePropsEdit = {
    id: number,
    text: string
    
}

export const Edit: FC<TypePropsEdit> = ({ id, text }) => {
    const [form, setForm] = useState<string>('')
    const [value, setValue] = useState<string>(text)

    const navigate = useNavigate()

    useEffect(() => {
        try {
            if (!form) {
                return
            }
            axios({
                method: 'put',
                url: `http://localhost:7070/posts/${id}`,
                data: {
                    'content': form
                }
            })
            .then(data => {
                if (data.status == 204) {
                    navigate(0)
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
            <ExitAction path="0"/>
            <h3>Редактировать</h3>
            <textarea className="text-edit" value={value} name="text-edit" id="" cols={30} rows={10} onChange={hundleChange}>

            </textarea>
            <button>Сохранить</button>
        </form>
    )
}