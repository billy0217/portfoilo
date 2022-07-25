
import { BrowserRouter } from 'react-router-dom';
import Header from './Components/Header/Header';
import Pages from './Pages/Pages';
import './scss/style.scss';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Pages /> 
      </BrowserRouter>
    </div>
  );
}

export default App;
