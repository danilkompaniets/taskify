"use client"

import { createBoard } from '@/actions/createBoard'
import { Button } from '@/components/ui/button'
import React from 'react'
import { useFormState } from 'react-dom'
import FormInput from './FormInput'
import FormButton from './FormButton'
import { useAction } from '@/hooks/useAction'

const Form = () => {
    const initialState = { message: null, errors: [] }

    const { execute, fieldErrors } = useAction(createBoard, {
        onSuccess: (data) => {
            console.log(data, "SUCCESSS!!!!!!W")
        },
        onError: (err) => { console.log(err) }
    })

    const onSubmit = (formData: FormData) => {
        const title = formData.get("title") as string

        execute({ title })
    }
    return (
        <form action={onSubmit}>
            <FormInput errors={fieldErrors} />
            <FormButton />
        </form>
    )
}

export default Form
