import React from 'react';
import { useForm } from 'react-hook-form';

function Formulario({enviarDatos}) {

    const {register, formState: { errors }, handleSubmit} = useForm();

    return (
        <>
         <div className="d-flex align-items-center justify-content-center">
            <form className='row md-6 d-flex flex-column flex-wrap-wrap' onSubmit={handleSubmit(enviarDatos)}>
                <div className="col-md-12">
                    <input type="text" className="form-control" placeholder='Ingrese nombre' {...register("nombre", { 
                        required: true,
                        minLength: 3
                    })}/>
                    {errors.nombre?.type === 'required' && <p className='text-dark bg-warning'>El campo nombre es requerido.</p>}
                    {errors.nombre?.type === 'minLength' && <p className='text-dark bg-warning'>Debe tener minimo 3 letras.</p>}
                </div>
                <div className="col-md-12">
                    <input type="text" className="form-control" placeholder='Ingrese Telefono' {...register("telefono", { 
                        required: true,
                        minLength: 8
                    })}/>
                    {errors.telefono?.type === 'required' && <p className='text-dark bg-warning'>El campo telefono es requerido.</p>}
                    {errors.telefono?.type === 'minLength' && <p className='text-dark bg-warning'>Debe tener minimo 7 digitos.</p>}
                </div>
                <div className="col-md-12">
                    <input type="text" className="form-control" placeholder='Ingrese email' {...register("email", { 
                        required: true,
                    })}/>
                    {errors.email?.type === 'required' && <p className='text-dark bg-warning'>El campo email es requerido.</p>}
                </div>
                <div className="col-md-12">
                    <input type="text" className="form-control" placeholder='Repita email' {...register("verificarEmail", { 
                        required: true,
                    })}/>
                    {errors.verificarEmail?.type === 'required' && <p className='text-dark bg-warning'>El campo verificar email es requerido.</p>}
                </div>
                <div className="col-12 mt-5">
                    <button className="btn btn-dark">Realizar pedido</button>
                </div>
            </form>
        </div>
        </>
    )
}

export default Formulario;