import React from 'react'
import Header from '../header'
import RandomPlanet from '../random-planet'
import ItemList from '../item-list'
import {BrowserRouter,  Route} from 'react-router-dom'

import './app.css'
import PersonDetails from '../person-details'



const App = () => {
    return (
        <div className="fluid divide">  
             <BrowserRouter>    
                <Header />
                <RandomPlanet />
                <Route path='/' exact={true} component={ItemList}/>
                <Route path='/people' exact={true} render={(match) => {
                    return <ItemList path={match.match.path}/>
                }} />
                <Route path='/starships' exact={true} render={(match) => {
                    return <ItemList path={match.match.path}/>
                }} />
                <Route path='/people/:id' render={({match}) => {
                    return <PersonDetails selectedPerson={match.params.id}/>                    
                }}/>
                <Route path='/planets' exact={true} render={(match) => {
                    return <ItemList path={match.match.path}/>
                }} />                
             </BrowserRouter>
        </div>
    )
}

export default App;