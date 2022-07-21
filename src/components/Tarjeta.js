import ItemCount from "./ItemCount";

function Tarjeta() {
    const onAdd = (count) => {
        alert("Compraste: " + count)
    }
    return (

        <div className="card-body">
            <h5 className="card-title">Producto</h5>
            <p className="card-text">Descrip.</p>
            <ItemCount stock={5} initial={1} onAdd={onAdd}/>
        </div>

    );
  }
export default Tarjeta;