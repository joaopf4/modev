import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './theme'
import Routes from './routes';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle/>
      <Routes/>
    </BrowserRouter>
  );
}

export default App;
