import './App.scss';

import {ChakraProvider} from '@chakra-ui/react'
import Partnership from './containers/Partnership';
import ParticlesBackground from './components/ParticlesBackground';
import {Provider} from 'react-redux';
import store from './redux/store';
import {I18nextProvider} from 'react-i18next';
import i18n from './i18n';

function App() {

    return (
        <ChakraProvider>
            <Provider store={store}>
                <ParticlesBackground>
                    <I18nextProvider i18n={i18n}>
                        <div className='App'>
                            <Partnership/>
                        </div>
                    </I18nextProvider>

                </ParticlesBackground>
            </Provider>
        </ChakraProvider>
    );
}

export default App;
