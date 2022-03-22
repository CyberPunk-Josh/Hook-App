import React, {useState, useCallback, useEffect} from 'react';
import { ShowIncrement } from './ShowIncrement';

import '../02-useEffect/effects.css';


export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    const increment = useCallback( (num) => {
        setCounter(c => c + num);
    }, [setCounter]);

    useEffect(() => {
        // ???
    }, [increment])
    

  return (
    <div>
        <h2>useCallback {counter}</h2>
        <hr />

        <ShowIncrement increment={increment} />
    </div>
  )
}
