import '../css/App.css';
import {Navbar} from '../components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {
  useState,
  createContext,
  useMemo
} from 'react';

//creamos el context y usememo para poder guardar los pokemon que capturemos y usarlos global
export const PokemonContext = createContext({
  info: '',
  setinfo: () => {},
});
function App() {
  const [info, setinfo] = useState([]);
  const value = useMemo(
    () => ({ info, setinfo }), 
    [info]
  );
  return (
    
    <div className="App">
      <PokemonContext.Provider value={value}>
      <Navbar />
      </PokemonContext.Provider>
    </div>
  );
}

export default App;

