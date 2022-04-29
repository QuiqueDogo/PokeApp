import { useState, useEffect, useRef, useContext} from 'react';
import '../css/card.css';
import axios from 'axios';
import imgPokeball  from '../img/poke.png'
import {PokemonContext} from '../pages/App';

function Card(props) {
  const  {info,setinfo}  = useContext(PokemonContext);

  const [infoPokemon, dataPokemon] = useState({
    sprites: {
      front_default: '',
    },
    stats:[{base_stat:1}],
  });

  const [hpokemon, triggerHP] = useState(1);
  let widthLabel = useRef(null);
  let hiddenPok = useRef(null);
  let showPok = useRef(null);
  let btnAttack = useRef(null);


  useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(`${props.url}`);
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
      return data -  Math.round(Math.random() * (15 - 1) + 1);
    }
 

    const attack = () =>{
      let  subHP = calHP(hpokemon);
      if(subHP < 10){
        props.setAlert(true, `Cuidado, puedes matar a ${props.name}`,'danger' )
      }else{
        triggerHP(subHP)
        widthLabel.current.style.width = `${regla(subHP)}%`;
        widthLabel.current.style.background = `${color(subHP)}`
        widthLabel.current.style.border = `1px solid ${color(subHP)}`;
      }
    }

    const Capture = () => {
      let  subHP = calHP(hpokemon);
      console.log(info)
      if(subHP < 26){
        hiddenPok.current.style.animation = 'Bounces';
        hiddenPok.current.style.animationDuration = "0.8s";
        hiddenPok.current.style.animationFillMode = "forwards";
        setTimeout(() => {
          showPok.current.style.animation = 'BouncesPokeball';
          showPok.current.style.animationDuration = "0.5s";
          showPok.current.style.animationFillMode = "forwards";
          props.setAlert(true, `${props.name} atrapado`, 'primary')
          setinfo([...info,infoPokemon])
          btnAttack.current.setAttribute('disabled','')
        }, 800);
      }else{
        
        props.setAlert(true, `Aun no le bajas mucha vida`, 'danger')
      }
    }
 

    return ( 
        <div  className='card'>
        <div className='main'>
          <div className='background-circle'>
            <div className='image'>
                <img ref={hiddenPok} className='pokemon' src={infoPokemon.sprites?.front_default ?? infoPokemon.sprites.other["official-artwork"].front_default} alt="" />
                <img ref={showPok} className='pokeball' src={imgPokeball} alt="" />
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
            <button
            ref={btnAttack} 
            onClick={Capture}
             className='division'>
                Capturar
            </button>
            <button 
            onClick={attack} 
            className='division2'>
                Atacar
            </button>
        </div>
    </div>
    )
}

export default Card
