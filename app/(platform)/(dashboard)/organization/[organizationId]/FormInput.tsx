"use client"

import { Input } from '@/components/ui/input'
import React from 'react'
import { useFormStatus } from 'react-dom'

interface FormInputProps {
    errors?: Record<string, any>

}

const FormInput = ({ errors }: FormInputProps) => {
    const { pending } = useFormStatus()
    return (
        <div className='flex flex-col space-y-2'>
            <Input disabled={pending} type="text" id="title" name="title" required placeholder="enter a board title" className="border-black border p-1" />
            {errors ? (
                <div className='text-red-500'>
                    {errors.title.map((error: string) => (<p key={error}>{error}</p>))}
                </div>
            ) : <p></p>}
        </div>
    )
}

export default FormInput