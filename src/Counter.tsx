import {useState} from 'react';
import './counter.scss'
const Counter = () => {
    const [count, setCount] = useState(0)
    const handleClick = () => {
        setCount(count + 1)
    }
    return (
        <div>
<button onClick={handleClick}>Count {count}</button>
        </div>
    );
};

export default Counter;
