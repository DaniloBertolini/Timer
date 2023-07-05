import styles from './title.module.css'

type Type = {
  title: string
}

function Title({ title }: Type) {
  return (
    <h1 className={ styles.titulo }>{title}</h1>
  )
}

export default Title