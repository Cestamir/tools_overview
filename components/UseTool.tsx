'use client'
import React, { useState } from 'react'

const UseTool = () => {
    const [email,setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        setTimeout(() => {
            setSubmitted(true);
        }, 1000)
    }

  return (
    <div id='use-tool'>
        {submitted ? (
            <p className='text-sm'>You are using this tool!</p>
        ) : (
            <form onSubmit={handleSubmit} className='flex flex-col gap-6'>
                <div className='flex flex-col gap-2'>
                    <label htmlFor='email'>Email Adress</label>
                    <input className='bg-dark-200 rounded-[6px] px-5 py-2.5' type='email' value={email} onChange={(e) => setEmail(e.target.value)} id='email' placeholder='Enter your email adress'/>
                </div>

                <button type='submit' className='bg-primary hover:bg-primary/90 w-full cursor-pointer items-center justify-center rounded-[6px] px-4 py-2.5 text-lg font-semibold text-black'>Submit</button>
            </form>
        )}
    </div>
  )
}

export default UseTool