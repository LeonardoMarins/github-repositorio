import Perfil from "./components/Perfil";
import Formulario from "./components/Formulario";
import ReposList from "./components/ReposList";
import { useState } from "react";

function App() {
  const [nomeUsuario, setNomeUsuario] = useState('');

  return (
    <>
      {nomeUsuario.length > 4 && (
        <>
          <Perfil nomeUsuario={nomeUsuario} />
          <ReposList nomeUsuario={nomeUsuario} />
        </>
      )}
        <input  placeholder="Entre com o seu Github" type="text" onBlur={(e) => setNomeUsuario(e.target.value)} />
    </>


  )
}

export default App
