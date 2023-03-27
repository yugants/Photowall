import ReactDOM from 'react-dom/client';
import Main from './Components/Main';
import './styles/stylesheet.css';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import rootReducer from './redux/reducer'
import { Provider } from 'react-redux';

const store = createStore(rootReducer);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider store = {store}><BrowserRouter><Main /></BrowserRouter></Provider>
);

