import Link from 'next/link'
import { AiFillHome, AiFillSetting, AiFillBell } from 'react-icons/ai'
import { FaUsers } from 'react-icons/fa'
import { CgProfile } from 'react-icons/cg'
import styles from './styles.module.css'

export default function IconsBar() {
  return (
    <div className={ styles.iconsBar }>
      <div className={ styles.iconBox }>
        <AiFillHome />
      </div>
      <div className={ styles.iconBox }>
        <FaUsers />
      </div>
      <div className={ styles.iconBox }>
        <AiFillBell />
      </div>
      <div className={ styles.iconBox }>
        <Link href='/profile'>
          <CgProfile />
        </Link>
      </div>
      <div className={ styles.iconBox }>
        <AiFillSetting />
      </div>
    </div>
  )
}