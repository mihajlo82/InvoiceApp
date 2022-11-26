import './App.css';
import Main from './components/Main';
import {BrowserRouter} from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Main />
            <ToastContainer />
        </BrowserRouter>
    </div>
  );
}

export default App;
