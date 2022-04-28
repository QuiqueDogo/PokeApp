import { useState, useEffect, useRef} from 'react';
import '../css/card.css';
import axios from 'axios';
import imgPokeball  from '../img/poke.png'


function Card(props) {


  const [infoPokemon, dataPokemon] = useState({
    sprites: {
      front_default: '',
    },
    stats:[{base_stat:1}],
  });

  const [hpokemon, triggerHP] = useState(1);
  let widthLabel = useRef(null);


  useEffect(() => {
      
      const fetchData = async () => {
        try {
          const response = await axios.get(`${props.url}`);
          // console.log(response);
          dataPokemon(response.data);
          triggerHP(response.data.stats[0].base_stat)
        } catch (error) {
          console.log("error", error);
        }
      };
  
      fetchData();
    },[])

    // FUNCIONES 
    const regla = (data) =>{
      return ((data * 100)/infoPokemon.stats[0].base_stat);
    }

    const color = (data) => {
      return(
      (((data * 100)/infoPokemon.stats[0].base_stat) <= 100 && 
      ((data * 100)/infoPokemon.stats[0].base_stat) >= 60) ? "#15e765" : 
      (((data * 100)/infoPokemon.stats[0].base_stat) <= 59 && ((data * 100)/infoPokemon.stats[0].base_stat) >= 30) ? "#f7de76" : "#f45639");
    }
    
    const calHP = (data) =>{
      return data -  Math.round(Math.random() * (9 - 1) + 1);
    }
 

    const attack = () =>{
      // hpTriggerBefore(hpokemon)
      let  subHP = calHP(hpokemon)
      triggerHP(subHP)
      widthLabel.current.style.width = `${regla(subHP)}%`;
      widthLabel.current.style.background = `${color(subHP)}`
      widthLabel.current.style.border = `1px solid ${color(subHP)}`;
    }
 

    return ( 
        <div  className='card'>
        <div className='main'>
          <div className='background-circle'>
            <div className='image'>
                <img className='pokemon' src={infoPokemon.sprites.front_default} alt="" />
                <img className='pokeball' src={imgPokeball} alt="" />
            </div>
          </div>
        </div>
        <div className='info'>
              <div className='subinfo'>
                <p>{props.name}</p>
              <div className='containerHp'>
                  <div ref={widthLabel} className='HP'></div>
              </div>
              </div>
              <div className='subinfo2'>
              <p>PH: {`${hpokemon} / ${infoPokemon.stats[0].base_stat}`}</p>
              </div>
          </div>
        <div className='options'>
            <button disabled="disableAttack" 
            // onClick="Capture"
             className='division'>
                Capturar
            </button>
            <button 
            onClick={ attack} 
            className='division2'>
                Atacar
            </button>
        </div>
    </div>
    )
}

export default Card
