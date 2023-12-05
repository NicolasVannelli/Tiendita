import CartWidget from "../CartWidget/CartWidget"
import './NavBar.scss'
const NavBar = () => {
  return (
    <header>
      <h1>NicoHARDWARE</h1>
      <nav>
        <ul>
          <li>PC armadas</li>
          <li>Componentes</li>
          <li>Perifericos</li>
        </ul>
      </nav>
      <CartWidget/>
    </header>
  )
}
export default NavBar