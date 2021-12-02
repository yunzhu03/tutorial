import { useState } from 'react'
import styles from './style.module.css'

export default function Counter() {
    const [value, setValue] = useState(0);

    return (
        <div>
            <p className={styles.value}>{value}</p>
            <button onClick={() => setValue(value => value + 1)}>+</button>
            <button onClick={() => setValue(value => value - 1)}>-</button>
        </div>
    )
}