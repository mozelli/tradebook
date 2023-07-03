import PostFooter from "./PostFooter"
import PostHeader from "./PostHeader"
import styles from './post.module.css'

export default function Post() {
  return (
    <article className={ styles.post }>
      <PostHeader />
      <p className={ styles.postText }>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas consequatur, eum repellat illum facilis assumenda nihil quo harum quisquam impedit.
      </p>
      <div className={ styles.postImage }>
        <img src="https://picsum.photos/1000/1300" alt="" />
      </div>
      <PostFooter />
    </article>
  )
}