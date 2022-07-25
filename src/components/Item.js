import {Link} from 'react-router-dom';
const Item = ({data}) => {
    return <>
        <div className="estilo_tarjeta">
            <img src={`../${data.url}`} className="card-img-top imgMedida" alt="img"/>
            <div>
                <h2 className="card-title">{data.nombre}</h2>
                <p className="card-text">{data.precio}</p>
                <p className="card-text">Stock: {data.stock}</p>
                <Link type="button" className="btn btn-dark" to={`/item/${data.id}`}>
                    Mas
                </Link>
            </div>
        </div>
    </>;
}
export default Item;