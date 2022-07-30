import React from 'react';
import { Link } from 'react-router-dom';

function Intercambiabilidad() {

    return (
        <>
            <Link to='/cart'>
                <button type="button" className="btn btn-dark" onClick={() => {}}>
                    Terminar mi compra
                </button>
            </Link>
            <Link to='/'>
                <button type="button" className="btn btn-dark" onClick={() => {}}>
                    Seguir comprando
                </button>
            </Link>
        </>
      )
    }

export default Intercambiabilidad