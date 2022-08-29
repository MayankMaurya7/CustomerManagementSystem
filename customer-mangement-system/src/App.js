import './App.css';
import CmsDashboard from './components/CmsDashboard';
import { Provider } from 'react-redux';
import store from "./redux/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <CmsDashboard/>
      </Provider>
    </div>
  );
}

export default App;
