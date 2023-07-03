import styles from './postFooter.module.css'
import { BiSolidLike, BiLike } from 'react-icons/bi'
import { BsChatLeft, BsFillChatLeftFill, BsFillShareFill } from 'react-icons/bs'

export default function PostFooter() {
  return (
    <footer className={ styles.postFooter }>
      <div className={ styles.reactionsBar }></div>
      <div className={ styles.actionsBar }>
        <div className={ styles.button }>
          <BiLike />
          <span className={ styles.counter }>
            
          </span>
        </div>
        <div className={ styles.button }>
          <BsFillChatLeftFill />
          <span className={ styles.counter }>
            2
          </span>
        </div>
        <div className={ styles.button }>
          <BsFillShareFill />
        </div>
      </div>
    </footer>
  )
}