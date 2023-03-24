import './App.scss';
import Partnership from './containers/Partnership';

import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <div className='App'>
        <Partnership />
      </div>
    </ChakraProvider>
  );
}

export default App;
