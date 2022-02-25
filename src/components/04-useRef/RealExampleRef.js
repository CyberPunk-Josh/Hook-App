import React, {useState} from 'react';
import {MultipleCustomsHooks} from '../03-examples/MultipleCustomsHooks';

import '../02-useEffect/effects.css';


export const RealExampleRef = () => {

    const [show, setShow] = useState(false);

  return (
    <div>
        <h1>Real example refs</h1>
        <hr />

        {show && <MultipleCustomsHooks/>}

        <button
            className="btn btn-primary mt-3"
            onClick={ () => {
                setShow( !show );
            }}
        >
            Show/Hide
        </button>
    </div>
  )
}
