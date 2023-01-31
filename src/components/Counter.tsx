import {useState} from 'react'
import classes from './Counter.module.scss'

const Counter = () => {
    const [count, setCount] = useState(0)
    const handleClick = () => {
        setCount(count + 1)
    }
    return (
        <div>
            <button className={classes.btn} onClick={handleClick}>Count {count}</button>
        </div>
    )
}

export default Counter
