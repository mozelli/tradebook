import Feed from '../components/Feed'
import TopNavigation from '../components/TopNavigation'
import UserInfo from '../components/UserInfo'
import styles from './profile.module.css'

export default function Profile() {
  return (
    <main className={ styles.profile }>
      <TopNavigation title='João Mozelli Neto' />
      <div className={ styles.labelProfile }>
        <img src="https://picsum.photos/1600/800" alt="" />
      </div>
      <div className={ styles.userName }>
        <div className={ styles.avatar }>

        </div>
        <h1>Nome do Usuário</h1>
      </div>
      <UserInfo />
      <Feed />
    </main>
  )
}