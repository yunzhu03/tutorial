import styles from './style.module.css'

export default function Hello({ name }) {
  return <h1 className={styles.hello}>Hello, {name}!</h1>
}
