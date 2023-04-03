import './App.scss';

import { ChakraProvider } from '@chakra-ui/react'
import Partnership from './containers/Partnership';
import SmothScroll from './components/SmothScroll/SmothScroll';
import ParticlesBackground from './components/ParticlesBackground';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {

  return (
    <ChakraProvider>
      <Provider store={store}>
        <ParticlesBackground>
          <div className='App'>
            <Partnership />
          </div>
        </ParticlesBackground>
      </Provider>
    </ChakraProvider>
  );
}

export default App;
