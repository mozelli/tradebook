import Link from 'next/link'
import styles from './login.module.css'

export default function Login() {
  return (
    <main className={ styles.login }>
      <div className={ styles.title }>
        <h1>tradebook</h1>
      </div>
      <div className={ styles.formLogin }>
        <input type="text" className="form-control form-control-lg mb-2" placeholder='email' />
        <input type="password" className="form-control form-control-lg mb-2" placeholder='senha' />
        <div className="d-grid">
          <button className="btn btn-primary fw-bold">
            Entrar
          </button>
        </div>
        <span className={ styles.forgotPasswordLink }>
          <Link href='rescuePassword'>Esqueci minha senha</Link>
        </span>
        <div className="d-grid mt-4">
          <Link href='/register' className="btn btn-secondary fw-bold register">
            Criar nova conta
          </Link>
        </div>
      </div>
    </main>
  )
}