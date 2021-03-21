import React from 'react'
import Header from '../header'
import RandomPlanet from '../random-planet'
import ItemList from '../item-list'
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'

import './app.css'
import Details from '../details'



 const App = () => {  
    return (
        <div className="fluid divide">  
             <BrowserRouter>    
                <Header />
                <RandomPlanet />
                
                <Switch>
                <Route path='/people' exact={true} render={(match) => {
                    return <ItemList path={match.match.path}/>
                }} />
                <Route path='/planets' exact={true} render={(match) => {
                    return <ItemList path = { match.match.path } match={match}/>
                }} />   
                <Route path='/starships' exact={true} render={(match) => {
                    return <ItemList path = { match.match.path } />
                }} />
                <Route path='/people/:id' render = {({ match }) => {
                    return <Details selectedId = { match.params.id }
                    path = { match.path } url = { match.url } />                    
                }}/>
                <Route path='/planets/:id' render={({match}) => {
                    return <Details selectedId = { match.params.id }
                    path = { match.path } url={match.url}/>                    
                }}/>
                <Route path='/starships/:id' render={({match}) => {
                    return <Details selectedId={match.params.id}
                    path = { match.path } url = { match.url }/>                    
                }}/>
                <Redirect to='/' />

                </Switch>
             
             </BrowserRouter>
        </div>
        )
    
}

export default App;