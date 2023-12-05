import NavBar from './componentes/NavBar/NavBar'
import './style.scss'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'

const App = () => {
  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting = "Mis productos"/>
    </div>
  )
}

export default App