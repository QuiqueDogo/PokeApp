import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Pokemon from '../pages/Pokemon';
import ListPokemon from '../pages/ListPokemon';
import styles from '../css/NavbarCss.module.css';


function Navbar(prop) {
    return(
			<Router>
         <div className={styles.header}>
        <div className={styles.containerLogo}>
            <img className={styles.logo} alt="img-logo-pokemon" src="http://pixelartmaker.com/art/d98dde45d242734.png" />
        </div>
        <div className={styles.choose}>
            <p>Batalla y captura tu pokemon</p>
        </div>
        <div className={styles.menu}>
          <ul>
            <li>
              <NavLink activeClassName={styles.current} exact  to="/">pokemons</NavLink>
              <NavLink activeClassName={styles.current} exact to="/listPokemon">Mis Pokemons</NavLink>
            </li>
          </ul>
           
        </div>
    </div>

        <Switch>
          <Route exact path="/" component={Pokemon} /> 
          <Route path="/listPokemon" component={ListPokemon} />
        </Switch>
    </Router>
    )
}

export {Navbar}

