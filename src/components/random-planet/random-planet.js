import React, { Component } from 'react'
import './random-planet.css'
import SwapiService from '../../services/SwapiService'
import Spiner from '../spinner';
import ErrorComponent from '../errorComponent';

export default class RandomPlanet extends Component {

    state = {
       planet: {},
       loading: true,
       error: false
    };

    componentDidMount() {
        this.updatePlanet()
    }
    errorRender() {
        this.setState({
            error: true
        })
    }
    swapi = new SwapiService();

    updatePlanet = () => {
        const id = Math.floor(Math.random()*19);
        this.swapi.getPlanetById(id)
        .then((planet) => {
            this.setState({
                ...planet,
                loading: false,
                error: false
            })
        })
        .catch(err => this.errorRender()) 
              
    }

    render() {
        const {loading, error, planet, id, name, population, rotationPeriod, diameter} = this.state;
        return( <React.Fragment>
                { error? (<ErrorComponent/>) :
                loading ?  (<Spiner/>) :   
                <this.PlanetView planet={planet} id={id} name={name} population={population} rotationPeriod={rotationPeriod} diameter={diameter}/>      
                }
                </React.Fragment>
        )
    }
        PlanetView = ({planet, id, name, population, rotationPeriod, diameter}) => {
           return (
            <div className="container divCon bg-dark">
            <div className="row">                
                <div className="col-sm-4">
                    <img className="planetImg rounded"  alt="planet"
                    src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}/>
                </div>
                <div className="col-sm-8">
                    <div className="row"> <h1 className="unselectable">Planet Name: <b className="boldPlanet selectable">{name}</b></h1></div>
                    
                        <p className="planet-info unselectable">Population:  <b className="boldPlanet selectable">{population}</b> people </p>
                        <p className="planet-info unselectable">Rotation Period:  <b className="boldPlanet selectable">{rotationPeriod}</b> years</p>
                        <p className="planet-info unselectable">Diameter:  <b className="boldPlanet selectable">{diameter}</b> meter </p>
                        <button onClick={() => console.log(planet)}>State</button>
                    
                </div>                
            </div>
            </div>
           )
       } 

}

