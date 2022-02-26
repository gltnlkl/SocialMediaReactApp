import './App.css';
import NewsFeed from './pages/NewsFeed';
import { createStore } from 'redux'


function App() {

  // STORE OLUSTURULACAK


  // ACTION  -> count  ++  -- 
  const arttir = () => {
    return {
      type: "ARTTIR"
    }
  }

  const azalt = () => {
    return {
      type: "AZALT"
    }
  }

  // REDUCER
  // sayac() -> return = 0
  // azalt() -> return = type"AZALT"
  // sayac(azalt) -> return = -1

  const sayac = (state = 0, action) => {
    switch (action.type) {

      case 'ARTTIR': return state + 1
      case 'AZALT': return state - 1
      default: return state
    }

  }

  // sayac i bir store a donustur
  let store = createStore(sayac)

  // stor u icerik olarak ekran a yazdiralim
  store.subscribe(() => console.log(store.getState()))


  // DISPATCH  (TETIKLEMEK ICIN)
  store.dispatch(arttir)



  return (
    <NewsFeed />
  );
}

export default App;
