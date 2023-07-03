"use client";
import { useState } from 'react'
import Link from 'next/link'
import TopNavigation from '../components/TopNavigation'
import styles from './register-3.module.css'

export default function Register() {
  const [userInfo, setUserInfo] = useState(() => {
    const data = localStorage.getItem('UserData');
    if(data) {
      return JSON.parse(data);
    }
  });
  const [statusButton, setStatusButton] = useState('btn btn-primary btn-lg');

  function formHandle(event) {
    const {name, value} = event.target;

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
      <h2 className='m-2'>Qual é o seu gênero?</h2>
      <div className="mx-2">
        <div className="row">
          <div className="col">
            <div className="form-check mb-2">
              <input 
                className="form-check-input" 
                type="radio" 
                name="gender" 
                id="masculino" 
                value="Masculino"
                onClick={formHandle} />
              <label className="form-check-label" for="masculino">
                Masculino
              </label>
            </div>
            <div className="form-check mb-2">
              <input 
                className="form-check-input" 
                type="radio" 
                name="gender" 
                id="feminino" 
                value="Feminino"
                onClick={formHandle} />
              <label className="form-check-label" for="feminino">
                Feminino
              </label>
            </div>
            <div className="form-check mb-4">
              <input 
                className="form-check-input" 
                type="radio" 
                name="gender" 
                id="nao-informado" 
                value="Não Informado"
                onClick={formHandle} />
              <label className="form-check-label" for="nao-informado">
                Prefiro não informar
              </label>
            </div>
          </div>
        </div>
        <div className="d-grid">
          <Link 
            className={statusButton} 
            href="/register-4"
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