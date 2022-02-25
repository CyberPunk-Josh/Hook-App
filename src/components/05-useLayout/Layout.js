import React, {useLayoutEffect, useRef, useState} from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';

import './layout.css';


export const Layout = () => {

    const {counter, increment} = useCounter(1);

    const {data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    const {quote} = !!data && data[0]; //si existe la data, extrae la posicion 0 de la data
    // console.log(author, quote);

    const pTag = useRef();
    const [boxSize, setBoxSize] = useState({});

    useLayoutEffect( () => {
        setBoxSize( pTag.current.getBoundingClientRect());
    },[quote]);

  return (
    <div>
        <h1>Layout Effect</h1>
        <hr />

        <blockquote className="blockquote text-right">
            <p 
                ref={pTag}
                className="mb-1"
            > 
                {quote} 
            </p>
        </blockquote>

        <pre>
            {JSON.stringify(boxSize, null, 3)}
        </pre>

        <button className="btn btn-primary" onClick={increment}>
            Next quote
        </button>
    </div>
  )
}
