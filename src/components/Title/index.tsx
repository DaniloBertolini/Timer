import styles from './title.module.css'

type Type = {
  title: string
}

function Title({ title }: Type) {
  return (
    <header className={ styles.titulo }>{title}</header>
  )
}

export default Title