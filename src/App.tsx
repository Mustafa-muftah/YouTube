import './App.scss';
import { SearchList } from './screens/searchList';
import {Provider}  from "react-redux";
import { Store } from "./appState";
import { NavBar } from './component/navBar/NavBar';

function App() {
  return (
     <Provider store={Store}>
      <NavBar/>
     <SearchList/>
    </Provider>

  );
}

export default App;
