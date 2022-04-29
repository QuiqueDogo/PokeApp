import React,{useState, useEffect, useContext,useRef} from 'react'; 
import styles from '../css/ListPokemon.module.css';
import {PokemonContext} from '../pages/App';

function ListPokemon() {
    const  {info,setinfo}  = useContext(PokemonContext);
    const  [dataaInfo, setdata] = useState([]);
    const  [description, setdescription] = useState([]);
    const  [moreData, setmoreData] = useState();

    //Funciones

    function typePokemon(type){
        switch(type){
          case 'normal':
            return 'https://images.wikidexcdn.net/mwuploads/wikidex/3/32/latest/20170114100442/Tipo_normal.gif';
          case 'fighting':
            return 'https://images.wikidexcdn.net/mwuploads/wikidex/b/b7/latest/20170114100336/Tipo_lucha.gif';
          case 'flying':
            return 'https://images.wikidexcdn.net/mwuploads/wikidex/e/e1/latest/20191118232224/Tipo_volador.gif';
          case 'poison':
            return 'https://images.wikidexcdn.net/mwuploads/wikidex/1/10/latest/20191118232220/Tipo_veneno.gif';
          case 'ground':
            return 'https://images.wikidexcdn.net/mwuploads/wikidex/1/1d/latest/20191118232216/Tipo_tierra.gif';
          case 'rock':
            return 'https://images.wikidexcdn.net/mwuploads/wikidex/e/e0/latest/20170114100446/Tipo_roca.gif';
          case 'bug':
            return 'https://images.wikidexcdn.net/mwuploads/wikidex/f/fe/latest/20191118232226/Tipo_bicho.gif';
          case 'ghost':
            return 'https://images.wikidexcdn.net/mwuploads/wikidex/4/47/latest/20170114100329/Tipo_fantasma.gif';
          case 'steel':
            return 'https://images.wikidexcdn.net/mwuploads/wikidex/d/d9/latest/20191118232245/Tipo_acero.gif';
          case 'fire':
            return 'https://images.wikidexcdn.net/mwuploads/wikidex/c/ce/latest/20170114100331/Tipo_fuego.gif';
          case 'water':
            return 'https://images.wikidexcdn.net/mwuploads/wikidex/9/94/latest/20191118232235/Tipo_agua.gif';
          case 'grass':
            return 'https://images.wikidexcdn.net/mwuploads/wikidex/d/d6/latest/20170114100444/Tipo_planta.gif';
          case 'electric':
            return 'https://images.wikidexcdn.net/mwuploads/wikidex/1/1b/latest/20170114100155/Tipo_el%C3%A9ctrico.gif';
          case 'psychic':
            return 'https://images.wikidexcdn.net/mwuploads/wikidex/1/15/latest/20170114100445/Tipo_ps%C3%ADquico.gif';
          case 'ice':
            return 'https://images.wikidexcdn.net/mwuploads/wikidex/4/40/latest/20170114100333/Tipo_hielo.gif';
          case 'dragon':
            return 'https://images.wikidexcdn.net/mwuploads/wikidex/0/01/latest/20170114100154/Tipo_drag%C3%B3n.gif';
          case 'dark':
            return 'https://images.wikidexcdn.net/mwuploads/wikidex/8/82/latest/20191118232327/Tipo_siniestro.gif';
          case 'fairy':
            return 'https://images.wikidexcdn.net/mwuploads/wikidex/b/bc/latest/20170114100332/Tipo_hada.gif';
          default:
            return 'https://cdn2.bulbagarden.net/upload/3/3c/UnknownIC_Big.png';
        }
      }

    const viewPersonal = (val) =>{
        console.log(val)
        setdata(val)
        fetch(`https://pokeapi.co/api/v2/pokemon-species/${val.id}`)
        .then((response) => response.json())
        .then(data => {
            const text = data.flavor_text_entries.find( elem => elem.language.name === 'es');
            setdescription(text.flavor_text)
            setmoreData(data)
            console.log(data.base_happiness, text.flavor_text)
        })
    }

    useEffect(()=>{
        // setinfo(['asioi'])
        // setinfo(['algo'])
        console.log(info)
    },[])
    return (
        <div className={styles.contentPokemon}>
        <div className={styles.allimg}>
            {
            info.map((element,index)=>{
                return(
                    <div onClick={() => viewPersonal(element)} key={index+'poke'} className={styles.contentimg}>
                        <img  alt="pokeimg" src={element.sprites?.front_default ?? element.sprites.other["official-artwork"].front_default}/>
                    </div>
                        )
                    })
            }
        </div>
        <div className={styles.pokedex} >
            <div className={styles.all}>
                <div className={styles.all_circles}>
                    <div className={styles.circle}></div>  
                    <div className={styles.circle2}></div>  
                    <div className={styles.circle3}></div>  
                    <div className={styles.circle4}></div>                   
                </div>
                <div className={styles.screen}>
                    <div className={styles.subscreen}>
                        <div className={styles.blackscreen}>
                            <img alt='' src={dataaInfo.sprites?.front_default ?? dataaInfo.sprites?.other["official-artwork"].front_default ?? ''} />
                        </div>
                    </div>
                    <div className={styles.screenInfo}>
                        <h4>{dataaInfo.name?.toUpperCase() ?? ''}</h4>
                        <div className={styles.info}>
                            <p style={{ textAlign :'justify'}}>{description}</p>
                            {dataaInfo.types  &&
                            <>
                                <p>Altura: {dataaInfo.height}m</p>
                                <p>Peso: {dataaInfo.weight}kg</p>
                                <p>Id: {dataaInfo.id}</p>
                                <p>Experencia Base: {dataaInfo.base_experience}</p>
                                <img className={styles.types} alt='' src={typePokemon(dataaInfo.types[0].type.name )}/>
                                <img className={styles.types} alt='' src={typePokemon(dataaInfo.types[1]?.type.name ?? '' )}/>
                            </>
                                
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default ListPokemon
