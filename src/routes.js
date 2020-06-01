import React from 'react';
import  { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './pages/Main';
import Repository from './pages/Repository'

export default function Routes(){

    return (
        // BrowserRouter - permite fazer navegação entre paginas com o endereço da pagina ex: localhost:3000/pagina.js
        // Switch - apenas uma rota sera chamada por vez(a cada rota)
        // Route  - representa uma pagina da app
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/repository" component={Repository} />
        </Switch>
        </BrowserRouter>
    );
}
