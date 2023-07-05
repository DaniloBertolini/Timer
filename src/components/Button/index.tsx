import styles from './button.module.css'

type Type = {
  text: string,
  onClick?: () => void,
  disabled?: boolean | undefined,
}

function Button({text, onClick, disabled }: Type) {
  return (
    <button
      className={ styles.button }
      onClick={ onClick }
      disabled={ disabled }
    >
      {text}
    </button>
  )
}

export default Button