import './App.scss';
import { SearchPage } from './screens/searchPage';
import {Provider}  from "react-redux";
import { Store } from "./appState";
import { NavBar } from './component/navBar';

function App() {
  return (
     <Provider store={Store}>
      <NavBar/>
     <SearchPage/>
    </Provider>

  );
}

export default App;
