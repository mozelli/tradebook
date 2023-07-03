import Link from 'next/link'
import styles from './topNavigation.module.css'
import { BsFillArrowLeftCircleFill } from 'react-icons/bs'

export default function TopNavigation({title}) {
  return (
    <nav className={ styles.topNavigation }>
      <div className={ styles.returnButton }>
        <Link href='/'>
          <BsFillArrowLeftCircleFill />
        </Link>
      </div>
      <h1>
        {title}
      </h1>
    </nav>
  )
}