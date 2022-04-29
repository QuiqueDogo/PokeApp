import {useRef} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Pokemon from '../pages/Pokemon';
import ListPokemon from '../pages/ListPokemon';
import logo from '../img/pokemonLogo.png'
import styles from '../css/NavbarCss.module.css';


function Navbar(prop) {
  let widthNav = useRef(null)
  const openNav = () => {
      widthNav.current.style.left = '0%'
  }
  const closeNav = () => {
    widthNav.current.style.left = '-60%'
  }

  const triggerClose = () => {
    widthNav.current.style.left = '-60%'
  }
    return(
			<Router>
        <nav onClick={openNav} className={styles.header}>
          <div 
            
            className={styles.navburger}
          >
            <svg width="30" height="30">
                <path d="M0,5 30,5" stroke="#000" strokeWidth="2"/>
                <path d="M0,14 30,14" stroke="#000" strokeWidth="2"/>
                <path d="M0,23 30,23" stroke="#000" strokeWidth="2"/>
            </svg>
          </div>
        </nav>
        <div className={styles.containerPok}>
        <div ref={widthNav} className={styles.sideNav}>
          <div className={styles.containerLogo}>
                <img className={styles.logo} alt="img-logo-pokemon" src={logo} />
                <svg onClick={closeNav} className={styles.closesvg} width="34" height="34" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
                </svg>
          </div>
          <div className={styles.choose}>
              <p>Batalla y captura tu pokemon</p>
          </div>
          <div className={styles.menu}>
            <ul>
              <li>
                <NavLink onClick={triggerClose} activeClassName={styles.current} exact  to="/">Pokemon</NavLink>
              </li>
              <li>
                <NavLink onClick={triggerClose} activeClassName={styles.current} exact to="/listPokemon">Mis Pokemons</NavLink>

              </li>
            </ul>
            
          </div>
        </div>

          <Switch>
            <Route exact path="/" component={Pokemon} /> 
            <Route path="/listPokemon" component={ListPokemon} />
          </Switch>
        </div>

    </Router>
    )
}

export {Navbar}



