import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './css/EstiloTarjeta.css';
import './css/NavBar.css';
import NavBar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer';
import Tarjeta from './components/Tarjeta';
import ItemDetailContainer from './containers/ItemDetailContainer';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

function App() {
    return (
    <BrowserRouter>
        <div className="App">
            <header className="App-header">
                <NavBar/>
            </header>
            <Routes>
                
                <Route index path='/' element={<ItemListContainer saludo='Coders trabajando: Proximamente mas contenido'/>} />
                <Route index path='/category/:categoryId' element={<ItemListContainer/>} />
                <Route path='/item/:id' element={<ItemDetailContainer/>} />
                <Route path='/' element={<Tarjeta/>}/>

                <Route path='*' element={<Navigate to='/'/>}/>
                    
            </Routes>
        </div>
    </BrowserRouter>
);
}
export default App;
