import React from 'react'
import UiButton from './ui-button'

import Link from 'next/link'
import { SignUpMutation } from '@/models/model-signup'


export default function UiInputUp() {
  const { register, HandleSubmit, errorMessage } = SignUpMutation()

  return (
    <form className=' w-1/3 p-10 flex flex-col items-center rounded-xl text-white border border-white bgcolor'
      onSubmit={HandleSubmit}>
      <h1 className=' text-2xl font-mono'>Register</h1>
      <label className='m-2 text2' id='email'>Email</label>
      <input {...register("email", { required: true })} className=' w-full py-2 px-2 rounded text' type="text" id='email' placeholder='Email...' />
      <label className='m-2 text2' id='password'>Password</label>
      <input {...register("password", { required: true })} className=' w-full py-2 px-2 rounded text' type="text" id='password' placeholder='Password...' />
      <UiButton clname='btn green' click='Sign Up' />
      <div className='flex'>
        <h3 className='mx-3 text'>Are you have already account?</h3>
        <Link href={'/signin'}>Login</Link>
      </div>
      <p className='p'>{errorMessage}</p>
    </form>
  )
}
