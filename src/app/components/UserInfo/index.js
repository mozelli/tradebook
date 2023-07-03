import styles from './userInfo.module.css'
import { MdWork, MdPlace } from 'react-icons/md'
import { BsClockFill } from 'react-icons/bs'
import { AiFillInstagram, AiFillFacebook, AiOutlineMail } from 'react-icons/ai'

export default function UserInfo() {
  return (
    <div className={ styles.userInfo }>
      <div className={ styles.info }>
        <span className={ styles.infoIcon }>
          <MdWork />
        </span>
        <span className={ styles.infoText }>
          Trabalha em Local de Trabalho
        </span>
      </div>
      <div className={ styles.info }>
        <span className={ styles.infoIcon }>
          <MdPlace />
        </span>
        <span className={ styles.infoText }>
          Mora em Cidade-UF
        </span>
      </div>
      <div className={ styles.info }>
        <span className={ styles.infoIcon }>
          <BsClockFill />
        </span>
        <span className={ styles.infoText }>
          Entrou em <em>30 de junho de 2023</em>
        </span>
      </div>
      <div className={ styles.info }>
        <span className={ styles.infoIcon }>
          <AiFillInstagram />
        </span>
        <span className={ styles.infoText }>
          instagram
        </span>
      </div>
      <div className={ styles.info }>
        <span className={ styles.infoIcon }>
          <AiFillFacebook />
        </span>
        <span className={ styles.infoText }>
          facebook
        </span>
      </div>
      <div className={ styles.info }>
        <span className={ styles.infoIcon }>
          <AiOutlineMail />
        </span>
        <span className={ styles.infoText }>
          exemplo@email.com
        </span>
      </div>
    </div>
  )
}