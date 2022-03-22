import './App.css';
import { NavProvider } from './_context/NavProvider';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <NavProvider>
      <Layout/>
    </NavProvider>
  );
}

export default App;
