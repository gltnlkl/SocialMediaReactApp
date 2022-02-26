import './App.css';
import NewsFeed from './pages/NewsFeed';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Login from './pages/Login'
import Profile from './pages/Profile';
import {useSelector} from 'react-redux'

function App() {

  /**
   * Eğer Login olmuş ise,
   */
  let islogin  = useSelector(x=> x.login)

  /*
  // STORE OLUŞTURULACAK

  // ACTION -> count   ++  --
  const arttir= ()=>{
    return{
      type: "ARTTIR"
    }
  }
  const azalt= ()=>{
    return{
      type: "AZALT"
    }
  }
  // REDUCER
  //  -  sayac()-> return = 0  boş kullanırsam
  //  - azalt()-> return type="AZALT"
  //  -- sayac(azalt)-> return = -1
  const sayac= (state=0,action)=>{
    switch(action.type){
      case 'ARTTIR': return state+1
      case 'AZALT': return state-1
      default: return state
    }
  }
  // sayac ı bir stor a dönüştür.
  let store = createStore(sayac)

  // stor u içerik olarka ekrana yazdıralım 
  store.subscribe(()=>console.log(store.getState()))

  // DISPATCH
  store.dispatch(arttir())
  store.dispatch(arttir())
  store.dispatch(arttir())
  store.dispatch(azalt())
  */

  return (  
    <BrowserRouter>
    <Routes>
       <Route path='/'  element={  islogin ? <NewsFeed />
                : <Login />  }/>
       <Route path='/profile' element={
         islogin ? <Profile />
                : <Login />             
       }/>
       <Route path='/login' element={<Login />}/>
    </Routes>    
  </BrowserRouter>

        
  );
}

export default App;
