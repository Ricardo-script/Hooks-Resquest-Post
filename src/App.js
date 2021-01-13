import React, { useState } from 'react'
import './App.css';
import usePost from './hooks/usePost';

function App() {

  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const { pending, data, error, execute } = usePost() // dados que esta exportando de src/hooks/usePost.js

  const handleSubmit = e =>{ // = á function handleSubmit(e){}
    e.preventDefault();
    //console.log({titulo, autor});// inserido dentro de {} para ficar formato json [console.log(titulo, autor);]
    //no lugar de console.log inserir o execute de src/hooks/usePost.js
    execute({ data: { titulo, autor } });

  }

  
  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleSubmit}>
          <label>
            Titulo:
            <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)}/>
          </label>
          <label>
            Autor:
            <input type="text" value={autor} onChange={(e) => setAutor(e.target.value)}/>
          </label>
          <input type="submit" value={ pending ? 'Loading...' : 'Submit'} disabled={pending}/>
        </form>

          {error && <span>Temos um erro</span>}
          {data && <span>Sucesso! ... {JSON.stringify(data)}</span>}
          

      </header>
    </div>
  );
}

export default App;
