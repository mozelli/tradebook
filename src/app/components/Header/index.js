import { AiOutlineMenu } from 'react-icons/ai'
import { BiSearchAlt2 } from 'react-icons/bi'
import { IoMdAddCircleOutline } from 'react-icons/io'
import styles from './styles.module.css'
import Link from 'next/link'

export default function Header() {
  return (
    <header className={ styles.header }>
      <div className={styles.title}>
        <h1>tradebook</h1>
      </div>
      <div className={ styles.headerButtons }>
      <div className={ styles.headerButtonsBox }>
        <Link href='newPost'>
          <IoMdAddCircleOutline />
        </Link>
        </div>
        <div className={ styles.headerButtonsBox }>
          <BiSearchAlt2 />
        </div>
        <div className={ styles.headerButtonsBox }>
          <AiOutlineMenu />
        </div>
      </div>
    </header>
  )
}