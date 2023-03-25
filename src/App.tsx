import './App.scss';
import Partnership from './containers/Partnership';

import { ChakraProvider } from '@chakra-ui/react'
import { Hero } from './components/hero/Hero';

function App() {
  return (
    <ChakraProvider>
      <div className='App' style={{background: '#0D0D0D'}}>
        <Hero />
      </div>
    </ChakraProvider>
  );
}

export default App;
