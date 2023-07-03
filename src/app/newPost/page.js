import TopNavigation from '../components/TopNavigation'
import { BsImage } from 'react-icons/bs'
import styles from './newPost.module.css'
import NewPostHeader from '../components/NewPostHeader'

export default function NewPost() {
  return (
    <main className={ styles.newPost }>
      <TopNavigation title='Nova publicação' />
      <NewPostHeader userName="User Name" />
      <div className={ styles.text }>
        <textarea name="text" className='form-control' rows={5}></textarea>
      </div>
      <div className={ styles.options }>
        <div className={ styles.option }>
          <BsImage />
          <span>Fotos</span>
        </div>
      </div>
      <div className="d-grid gap-2 m-2">
        <button className='btn btn-primary publishButton fw-bold'>Publicar!</button>
      </div>
    </main>
  )
}