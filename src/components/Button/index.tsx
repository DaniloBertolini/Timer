import styles from './button.module.css'

type Type = {
  text: string,
  onClick?: () => void,
}

function Button({text, onClick}: Type) {
  return (
    <button
      className={ styles.button }
      onClick={ onClick }
    >
      {text}
    </button>
  )
}

export default Button