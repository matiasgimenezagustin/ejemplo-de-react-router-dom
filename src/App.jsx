

import { Route, Routes } from 'react-router-dom';
import { ContactForm, Navbar, ProductList, Error, Background } from './Component';

const App = () => {
  return (
    <div className="App">
      <Navbar/>

      <Background>
        <h1>hola</h1>
        <Routes>
          <Route path='/' element={<ProductList/>}/>
          <Route path="/home" element={<ProductList/>}/>
          <Route path='/products/:category' element={<ProductList/>} />
          <Route path='/contact' element={<ContactForm/> }/>
          <Route path='*' element={<Error/>} />
        </Routes>
      </Background>

    </div>
  );
}

export default App;
