
import { BrowserRouter } from 'react-router-dom';
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
