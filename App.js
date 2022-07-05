import logo from './logo.svg';
import './App.css';
import Apper from './router';
import {Provider} from "react-redux"
import store from './redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
    <Provider store={store}>
     <Apper/>
     </Provider>
    </>
   
  )
}

export default App;
