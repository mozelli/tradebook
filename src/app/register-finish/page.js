"use client";
import { useState } from 'react'
import Link from 'next/link'
import TopNavigation from '../components/TopNavigation'
import styles from './register-finish.module.css'

export default function Register() {
  const [userInfo, setUserInfo] = useState(() => {
    const data = localStorage.getItem('UserData');
    if(data) {
      return JSON.parse(data);
    }
  });
  return (
    <div className={ styles.register }>
      <TopNavigation title={ `Parabéns ${userInfo.name}!!` } />
      <h2 className='m-2 text-center mb-4'>Agora só falta mais um passo</h2>
      <div className="mx-2">
        <div className="row">
          <div className="col">
            <p className='text-center'>Verifique seu email</p>
            <p className='text-center text-primary'>{userInfo.email}</p>
            <p className='text-center'>Nós enviamos um link de confirmação para você.</p>
          </div>
        </div>
      </div>
    </div>
  )
}