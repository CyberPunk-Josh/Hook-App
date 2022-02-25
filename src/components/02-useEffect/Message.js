import React, {useEffect, useState} from 'react'

export const Message = () => {

    const [coords, setCoords] = useState({ x: 0, y: 0 });

    const {x, y} = coords;

    useEffect(() => {

        const mouseMove = (e) => {
            const coors = {x: e.x, y: e.y};
            setCoords(coors);
        }

      console.log('conponente montado');  // inicia la ejecucion de la funcion
      window.addEventListener('mousemove', mouseMove);
    
      return () => {
        console.log('componente desmontado'); // termina la ejecucion de la funcion
        // se hace referencia a la funcion a desmontar
        window.removeEventListener('mousemove', mouseMove);
      }
    }, []);
    

  return (
    <div>
        <h3>Message</h3>
        <p>
            x:{x}, y:{y}
        </p>
    </div>
  )
}
