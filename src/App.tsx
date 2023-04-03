import './App.scss';

import { ChakraProvider } from '@chakra-ui/react'
import Partnership from './containers/Partnership';
import SmothScroll from './components/SmothScroll/SmothScroll';
import ParticlesBackground from './components/ParticlesBackground';

function App() {

  return (
    <ChakraProvider>
      <ParticlesBackground>
        <div className='App'>
          <SmothScroll>
            <Partnership />
          </SmothScroll>
        </div>
      </ParticlesBackground>
    </ChakraProvider>
  );
}

export default App;
