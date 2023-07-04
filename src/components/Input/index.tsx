import styles from './Input.module.css'

type Type = {
  placeholder: string,
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void | undefined,
}

function Input({placeholder, onChange }: Type) {
  return (
    <input
      type="text"
      placeholder={ placeholder }
      className={ styles.input }
      onChange={ onChange }
    >

    </input>
  )
}

export default Input