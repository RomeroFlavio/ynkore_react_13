const ItemDetail = ({data}) => {
    return <>
        <div className="estilo_tarjeta">
            <img src={`../${data.url}`} className="card-img-top imgMedida" alt="img"/>
            <div>
                <h2 className="card-title">{data.nombre}</h2>
                <p className="card-text">{data.precio}</p>
                <p className="card-text">Stock: {data.stock}</p>
                <p className="card-text">Descrip: {data.descr}</p>
                <a href="#" className="btn btn-primary">Comprar</a>
            </div>
        </div>
    </>;
}
export default ItemDetail;