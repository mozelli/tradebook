"use client";
import { useEffect, useState } from 'react'
import Link from 'next/link'
import TopNavigation from '../components/TopNavigation'
import styles from './register.module.css'

export default function Register() {
  const [userInfo, setUserInfo] = useState({
    name: '',
    lastName: '',
    birthDay: '',
    birthMonth: '',
    birthYear: '',
    gender: '',
    email: '',
    password: ''
  });
  const [statusButton, setStatusButton] = useState('btn btn-primary btn-lg disabled');

  function formHandle(event) {
    const {name, value} = event.target;
    if(userInfo.name.length >= 2 && userInfo.lastName.length >= 2) {
      setStatusButton('btn btn-primary btn-lg');
    } else {
      setStatusButton('btn btn-primary btn-lg disabled');
    }

    setUserInfo((prev) => {
      const newData = {...prev, [name]: value};
      return newData;
    })
  }

  function formSubmit() {
    localStorage.setItem('UserData', JSON.stringify(userInfo));
  }
  return (
    <div className={ styles.register }>
      <TopNavigation title='Junte-se a nós!' />
      <h2 className='m-2'>Informe o seu nome</h2>
      <div className="mx-2">
        <input 
          type="text" 
          name='name'
          className="form-control form-control-lg mb-4" 
          placeholder='Nome' 
          value={userInfo.name}
          onChange={formHandle} />
        <input 
          type="text" 
          name='lastName'
          className="form-control form-control-lg mb-4" 
          placeholder='Sobrenome' 
          value={userInfo.lastName} 
          onChange={formHandle} />
        <div className="d-grid">
          <Link 
            className={statusButton} 
            href="/register-1"
            onClick={() => formSubmit()}
          >
            Próximo
          </Link>
        </div>
      </div>
      <div className="mx-2 my-4">
        <Link href="/login">Já tem uma conta?</Link>
      </div>
      
    </div>
  )
}