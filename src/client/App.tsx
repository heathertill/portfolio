import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons';

import './scss/app';

import Hello from './components/public/Hello';
import Navbar from './components/public/Navbar';
import About from './components/public/About';
import Contact from './components/public/Contact';
import Work from './components/public/Work';
import Footer from './components/public/Footer';

const myLibrary: any = library
    myLibrary.add(fab)

const App: React.FunctionComponent<AppProps> = () => {
    return (
        <BrowserRouter>
            <main className="container">
                <Navbar />
                <Switch>
                    <Route exact path='/' component={Hello} />
                    <Route exact path='/about' component={About} />
                    <Route exact path='/contact' component={Contact} />
                    <Route exact path='/work' component={Work} />
                    <Route exact path='/footer' component={Footer} />
                </Switch>
            </main>
        </BrowserRouter>
    );
}

export default App;

export interface AppProps { }
