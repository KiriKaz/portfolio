import ReactDOM from 'react-dom/client';
import App from './App';
import Navbar from './components/navbar';
import './index.css';


const elem = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(elem);

root.render(
  <div tw="bg-gray-700 absolute h-full w-full">
    <Navbar />
    <App />
  </div>
);