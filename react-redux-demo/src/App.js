import './App.css';
import CakeContainer from './components/CakeContainer';
import { Provider } from 'react-redux'
import store from './redux/store';
import HoosCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import ItemContainer from './components/ItemContainer';
import UserContainer from './components/UserContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UserContainer />
        <ItemContainer cake />
        <ItemContainer />
        <HoosCakeContainer />
        <CakeContainer />
        <IceCreamContainer />
      </div>
    </Provider>
  );
}

export default App;
