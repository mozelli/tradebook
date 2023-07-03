"use client";
import { useState } from 'react'
import Link from 'next/link'
import TopNavigation from '../components/TopNavigation'
import styles from './register-4.module.css'

export default function Register() {
  const [userInfo, setUserInfo] = useState(() => {
    const data = localStorage.getItem('UserData');
    if(data) {
      return JSON.parse(data);
    }
  });
  const [statusButton, setStatusButton] = useState('btn btn-primary btn-lg disabled');

  function formHandle(event) {
    const {name, value} = event.target;
    if(userInfo.password.length >= 5) {
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
      <h2 className='m-2'>Informe uma senha</h2>
      <div className="mx-2">
        <div className="row">
          <div className="col">
            <input 
              type="text" 
              name='password'
              className="form-control form-control-lg mb-4" 
              placeholder='Senha' 
              value={userInfo.password}
              onChange={formHandle} />
          </div>
        </div>
        <p className={ styles.terms }>
          Ao tocar em Cadastre-se, você concorda com nossos Termos, Política de Privacidade e Política de Cookies. 
        </p>
        <div className="d-grid">
          <Link 
            className={statusButton} 
            href="/register-finish"
            onClick={() => formSubmit()}
          >
            Cadastre-se
          </Link>
        </div>
      </div>
      <div className="mx-2 my-4">
        <Link href="/login">Já tem uma conta?</Link>
      </div>
      
    </div>
  )
}