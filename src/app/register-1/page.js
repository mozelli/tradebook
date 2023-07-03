"use client";
import { useState } from 'react'
import Link from 'next/link'
import TopNavigation from '../components/TopNavigation'
import styles from './register-1.module.css'

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
    if(userInfo.birthDay !== '' && userInfo.birthMonth !== '' && userInfo.birthYear !== '') {
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
      <h2 className='m-2'>Informe sua data de nascimento</h2>
      <div className="mx-2">
        <div className="row">
          <div className="col">
            <input 
              type="number" 
              name='birthDay'
              className="form-control form-control-lg mb-4" 
              placeholder='Dia' 
              value={userInfo.birthDay}
              onChange={formHandle} />
          </div>
          <div className="col">
            <input 
              type="number" 
              name='birthMonth'
              className="form-control form-control-lg mb-4" 
              placeholder='Mês' 
              value={userInfo.birthMonth}
              onChange={formHandle} />
          </div>
          <div className="col">
            <input 
              type="number" 
              name='birthYear'
              className="form-control form-control-lg mb-4" 
              placeholder='Ano' 
              value={userInfo.birthYear}
              onChange={formHandle} />
          </div>
        </div>
        <div className="d-grid">
          <Link 
            className={statusButton} 
            href="/register-2"
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