import { useState, useEffect} from 'react';
import Card from '../components/Card'
import API from '../plugins/api'
import styles from '../css/Pokemoncss.module.css'
// /pokemon/?limit=49
function Pokemon() {
// const getData = async (req, res) => {
//     const response = await API.get(`/pokemon/`)
//     console.log(response);
// }
// getData()
const [pokemon, getData] = useState({
  results: []
})
useEffect(() => {
    
    const fetchData = async () => {
      try {
        const response = await API.get(`pokemon/`);
        console.log(response);
        getData(response.data);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  },[])
  
    return (
        <div className={styles.grid_pokemon}>
            {pokemon.results.map(p => {
              return(
                <Card key={p.name}
                  name={p.name}
                  url={p.url}
                />

              )
            })}
        </div>
    )
}

export default Pokemon
