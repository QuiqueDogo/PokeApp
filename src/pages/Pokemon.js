import { useState, useEffect} from 'react';
import Card from '../components/Card';
import axios from 'axios';
import styles from '../css/Pokemoncss.module.css';
import CustomAlert from '../components/CustomAlert';


function Pokemon() {
		const [pokemon, getData] = useState([])
    const [filterpokemon, filtergetData] = useState([]);
    const [show, setShow] = useState(false);
    const [textRender, settextRender] = useState('')
    const [variant, setvariant] = useState('')
    const [loading, setloading] = useState(true)
		const filterPokemon = (data) => {
      let name = data.target.value
      let filterPok = pokemon.filter(info => info.name.toLowerCase().includes(name.toLowerCase()))
      filtergetData(filterPok)
		}
    let value3 = Math.floor(Math.random() * 300)

		const [info] =useState(`https://pokeapi.co/api/v2/pokemon?offset=${value3}&limit=300`);
    const setAlert = (showTo, text, type) =>  {
        console.log(show, text)
        settextRender(text)
        setShow(showTo)
        setvariant(type)
    }

		useEffect(() => {
				
				const fetchData = async () => {
					try {
						const response = await axios.get(info);
						console.log(response);
						if(response.status === 200){
							getData(response.data.results);
              filtergetData(response.data.results);
							setloading(false)
						}
					} catch (error) {
						console.log("error", error);
					}
				};

				fetchData();
			},[])
				return (
          <section className={styles.content}>
          <input className={styles.inputSearch} placeholder='Busca tu pokemon' type="text" onChange={ filterPokemon}/>
					<div className={styles.container_pok}>	
						{loading &&
							svgLoading
						}
								{filterpokemon.map(result => {
									return(
										<Card key={result.name}
											name={result.name}
											url={result.url}
                      setAlert={setAlert}
											/>
											
											)
										})}
					
					</div>	
          <CustomAlert 
            textToRender={textRender}
            variant={variant}
            showProp={show}
            setShow={setShow} 
            time='1500'/>
          </section>
			
				)
		}

		export default Pokemon


const svgLoading =
<svg xmlns="http://www.w3.org/2000/svg" className={styles.loading}   width="150px" height="150px" viewBox="0 0 100 100" >
<g transform="rotate(0 50 50)">
  <rect x="39.5" y="31.5" rx="10.5" ry="2.5" width="21" height="5" fill="#fe718d">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.2048192771084336s" begin="-1.1768002241524236s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(8.372093023255815 50 50)">
  <rect x="39.5" y="31.5" rx="10.5" ry="2.5" width="21" height="5" fill="#fe718d">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.2048192771084336s" begin="-1.1487811711964133s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(16.74418604651163 50 50)">
  <rect x="39.5" y="31.5" rx="10.5" ry="2.5" width="21" height="5" fill="#fe718d">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.2048192771084336s" begin="-1.1207621182404033s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(25.11627906976744 50 50)">
  <rect x="39.5" y="31.5" rx="10.5" ry="2.5" width="21" height="5" fill="#fe718d">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.2048192771084336s" begin="-1.0927430652843932s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(33.48837209302326 50 50)">
  <rect x="39.5" y="31.5" rx="10.5" ry="2.5" width="21" height="5" fill="#fe718d">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.2048192771084336s" begin="-1.0647240123283832s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(41.86046511627907 50 50)">
  <rect x="39.5" y="31.5" rx="10.5" ry="2.5" width="21" height="5" fill="#fe718d">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.2048192771084336s" begin="-1.0367049593723732s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(50.23255813953488 50 50)">
  <rect x="39.5" y="31.5" rx="10.5" ry="2.5" width="21" height="5" fill="#fe718d">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.2048192771084336s" begin="-1.008685906416363s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(58.604651162790695 50 50)">
  <rect x="39.5" y="31.5" rx="10.5" ry="2.5" width="21" height="5" fill="#fe718d">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.2048192771084336s" begin="-0.9806668534603529s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(66.97674418604652 50 50)">
  <rect x="39.5" y="31.5" rx="10.5" ry="2.5" width="21" height="5" fill="#fe718d">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.2048192771084336s" begin="-0.9526478005043428s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(75.34883720930233 50 50)">
  <rect x="39.5" y="31.5" rx="10.5" ry="2.5" width="21" height="5" fill="#fe718d">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.2048192771084336s" begin="-0.9246287475483328s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(83.72093023255815 50 50)">
  <rect x="39.5" y="31.5" rx="10.5" ry="2.5" width="21" height="5" fill="#fe718d">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.2048192771084336s" begin="-0.8966096945923226s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(92.09302325581395 50 50)">
  <rect x="39.5" y="31.5" rx="10.5" ry="2.5" width="21" height="5" fill="#fe718d">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.2048192771084336s" begin="-0.8685906416363126s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(100.46511627906976 50 50)">
  <rect x="39.5" y="31.5" rx="10.5" ry="2.5" width="21" height="5" fill="#fe718d">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.2048192771084336s" begin="-0.8405715886803025s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(108.83720930232558 50 50)">
  <rect x="39.5" y="31.5" rx="10.5" ry="2.5" width="21" height="5" fill="#fe718d">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.2048192771084336s" begin="-0.8125525357242924s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(117.20930232558139 50 50)">
  <rect x="39.5" y="31.5" rx="10.5" ry="2.5" width="21" height="5" fill="#fe718d">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.2048192771084336s" begin="-0.7845334827682823s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(125.5813953488372 50 50)">
  <rect x="39.5" y="31.5" rx="10.5" ry="2.5" width="21" height="5" fill="#fe718d">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.2048192771084336s" begin="-0.7565144298122722s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(133.95348837209303 50 50)">
  <rect x="39.5" y="31.5" rx="10.5" ry="2.5" width="21" height="5" fill="#fe718d">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.2048192771084336s" begin="-0.7284953768562622s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(142.32558139534885 50 50)">
  <rect x="39.5" y="31.5" rx="10.5" ry="2.5" width="21" height="5" fill="#fe718d">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.2048192771084336s" begin="-0.700476323900252s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(150.69767441860466 50 50)">
  <rect x="39.5" y="31.5" rx="10.5" ry="2.5" width="21" height="5" fill="#fe718d">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.2048192771084336s" begin="-0.672457270944242s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(159.06976744186048 50 50)">
  <rect x="39.5" y="31.5" rx="10.5" ry="2.5" width="21" height="5" fill="#fe718d">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.2048192771084336s" begin="-0.6444382179882319s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(167.4418604651163 50 50)">
  <rect x="39.5" y="31.5" rx="10.5" ry="2.5" width="21" height="5" fill="#fe718d">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.2048192771084336s" begin="-0.6164191650322218s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(175.8139534883721 50 50)">
  <rect x="39.5" y="31.5" rx="10.5" ry="2.5" width="21" height="5" fill="#fe718d">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.2048192771084336s" begin="-0.5884001120762118s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(184.1860465116279 50 50)">
  <rect x="39.5" y="31.5" rx="10.5" ry="2.5" width="21" height="5" fill="#fe718d">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.2048192771084336s" begin="-0.5603810591202016s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(192.5581395348837 50 50)">
  <rect x="39.5" y="31.5" rx="10.5" ry="2.5" width="21" height="5" fill="#fe718d">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.2048192771084336s" begin="-0.5323620061641916s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(200.93023255813952 50 50)">
  <rect x="39.5" y="31.5" rx="10.5" ry="2.5" width="21" height="5" fill="#fe718d">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.2048192771084336s" begin="-0.5043429532081815s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(209.30232558139534 50 50)">
  <rect x="39.5" y="31.5" rx="10.5" ry="2.5" width="21" height="5" fill="#fe718d">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.2048192771084336s" begin="-0.4763239002521714s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(217.67441860465115 50 50)">
  <rect x="39.5" y="31.5" rx="10.5" ry="2.5" width="21" height="5" fill="#fe718d">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.2048192771084336s" begin="-0.4483048472961613s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(226.04651162790697 50 50)">
  <rect x="39.5" y="31.5" rx="10.5" ry="2.5" width="21" height="5" fill="#fe718d">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.2048192771084336s" begin="-0.42028579434015123s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(234.41860465116278 50 50)">
  <rect x="39.5" y="31.5" rx="10.5" ry="2.5" width="21" height="5" fill="#fe718d">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.2048192771084336s" begin="-0.39226674138414114s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(242.7906976744186 50 50)">
  <rect x="39.5" y="31.5" rx="10.5" ry="2.5" width="21" height="5" fill="#fe718d">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.2048192771084336s" begin="-0.3642476884281311s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(251.1627906976744 50 50)">
  <rect x="39.5" y="31.5" rx="10.5" ry="2.5" width="21" height="5" fill="#fe718d">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.2048192771084336s" begin="-0.336228635472121s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(259.5348837209302 50 50)">
  <rect x="39.5" y="31.5" rx="10.5" ry="2.5" width="21" height="5" fill="#fe718d">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.2048192771084336s" begin="-0.3082095825161109s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(267.90697674418607 50 50)">
  <rect x="39.5" y="31.5" rx="10.5" ry="2.5" width="21" height="5" fill="#fe718d">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.2048192771084336s" begin="-0.2801905295601008s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(276.27906976744185 50 50)">
  <rect x="39.5" y="31.5" rx="10.5" ry="2.5" width="21" height="5" fill="#fe718d">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.2048192771084336s" begin="-0.2521714766040907s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(284.6511627906977 50 50)">
  <rect x="39.5" y="31.5" rx="10.5" ry="2.5" width="21" height="5" fill="#fe718d">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.2048192771084336s" begin="-0.22415242364808066s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(293.0232558139535 50 50)">
  <rect x="39.5" y="31.5" rx="10.5" ry="2.5" width="21" height="5" fill="#fe718d">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.2048192771084336s" begin="-0.19613337069207057s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(301.3953488372093 50 50)">
  <rect x="39.5" y="31.5" rx="10.5" ry="2.5" width="21" height="5" fill="#fe718d">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.2048192771084336s" begin="-0.1681143177360605s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(309.7674418604651 50 50)">
  <rect x="39.5" y="31.5" rx="10.5" ry="2.5" width="21" height="5" fill="#fe718d">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.2048192771084336s" begin="-0.1400952647800504s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(318.13953488372096 50 50)">
  <rect x="39.5" y="31.5" rx="10.5" ry="2.5" width="21" height="5" fill="#fe718d">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.2048192771084336s" begin="-0.11207621182404033s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(326.51162790697674 50 50)">
  <rect x="39.5" y="31.5" rx="10.5" ry="2.5" width="21" height="5" fill="#fe718d">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.2048192771084336s" begin="-0.08405715886803025s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(334.8837209302326 50 50)">
  <rect x="39.5" y="31.5" rx="10.5" ry="2.5" width="21" height="5" fill="#fe718d">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.2048192771084336s" begin="-0.056038105912020165s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(343.25581395348837 50 50)">
  <rect x="39.5" y="31.5" rx="10.5" ry="2.5" width="21" height="5" fill="#fe718d">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.2048192771084336s" begin="-0.028019052956010083s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(351.6279069767442 50 50)">
  <rect x="39.5" y="31.5" rx="10.5" ry="2.5" width="21" height="5" fill="#fe718d">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.2048192771084336s" begin="0s" repeatCount="indefinite"></animate>
  </rect>
</g>
</svg>
;