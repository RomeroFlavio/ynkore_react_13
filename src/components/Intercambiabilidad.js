import React from 'react';
import { Link } from 'react-router-dom';

function Intercambiabilidad() {

    return (
        <>
            <Link to='/cart'>
                <button className='btn btn-outline-primary' onClick={() => {}}>
                    Terminar mi compra
                </button>
            </Link>
            <Link to='/'>
                <button className='btn btn-outline-primary' onClick={() => {}}>
                    Seguir comprando
                </button>
            </Link>
        </>
      )
    }

export default Intercambiabilidad