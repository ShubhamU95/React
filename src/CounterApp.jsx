import React, {useState} from 'react';
import ResetButton  from './ResetButton';

const CounterApp = () => {
  const [count , setCount] = useState(0);

    const increment = () => {
        setCount ((prevCount) => {
            if (prevCount >= 10) {
                return 0;
            } else {
                return prevCount + 1;
            }
        });
    };

    const decrement = () => {
        setCount((prevCount) =>  {
            if (prevCount > 0 ) {
                return prevCount - 1;
            } else {
                return 0;
            }
        });
    };

    const reset  = () => {setCount(0) };

    return (
        <div>
        <h1>Counter : {count}</h1>
            <button onClick = {increment}>Increment</button>
              <button onClick = {decrement}>Decrement</button>
            <ResetButton reset={reset}/>
        </div>
    );
};

export default CounterApp;