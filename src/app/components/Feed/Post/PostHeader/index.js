import styles from './postHeader.module.css'
import { CiMenuKebab } from 'react-icons/ci'

export default function PostHeader() {
  return (
    <header className={ styles.postHeader }>
      <div className={ styles.info }>
        <div className={ styles.avatar }>
        </div>
        <div className={ styles.userName }>
          <h2>Nome do Usuário</h2>
        </div>
      </div>
      <div className={ styles.menuButton }>
        <CiMenuKebab />
      </div>
    </header>
  )
}