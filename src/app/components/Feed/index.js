import Post from './Post'
import styles from './feed.module.css'

export default function Feed() {
  return (
    <section className={ styles.feed }>
      <Post />
      <Post />
    </section>
  )
}