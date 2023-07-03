import Link from 'next/link'
import { CiMenuKebab } from 'react-icons/ci'
import { BsGlobe } from 'react-icons/bs'
import styles from './newPostHeader.module.css'

export default function NewPostHeader({ userName }) {
  return (
    <header className={ styles.newPostHeader }>
      <div className={ styles.info }>
        <div className={ styles.avatar }>
        </div>
        <div className={ styles.right }>
          <div className={ styles.userName }>
            <h2>{ userName }</h2>
          </div>
          <div className={ styles.visibilityButton }>
            <button>
              <BsGlobe />
              Público
            </button>
          </div>
        </div>
      </div>
      <div className={ styles.menuButton }>
        <CiMenuKebab />
      </div>
    </header>
  )
}