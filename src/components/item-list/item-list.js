import React, { Component } from 'react'
import SwapiService from '../../services/SwapiService'
import ErrorComponent from '../errorComponent';
import PersonDetails from '../person-details';
import Spiner from '../spinner';
import './item-list.css'

export default class ItemList extends Component {

    state = {
        persons: [],
        planets: [],
        starships: [],
        error: false,
        loading: true,
        selectedPerson: {}
    }

    swapi = new SwapiService();

    componentDidMount() {
    this.swapi.getAllPeople()
    .then(persons => this.setState({
        persons, loading: false
    }))
    .catch(err => 
        {console.log(err)
            this.setState({error: true})
        })
    }  
    
    selectPerson = (person) => {
        this.setState({
            selectedPerson: person
        })
    }

    render() {
        const {persons, loading, error, selectedPerson} = this.state;
            
    return ( <div className="container">
                <div className="row">
                    <div className="col-md-5 itemList">
                        <ul className="list-group">
                            { error? <ErrorComponent/> :
                            loading? <Spiner/> :
                                persons.map(el => {
                                return (
                                <this.PlanetView 
                                    key = {el.id}
                                    name = {el.name} 
                                    person={el}/>
                                )
                            })}
                        </ul> 
                        </div>
                        {selectedPerson ? <PersonDetails selectedPerson = {selectedPerson}/>  : null }                                               
                    </div>
                 </div>
            )
    }

    PlanetView = ({name, person}) => {
        return (
        <li className="list-group-item whenActive" onClick={() => this.selectPerson(person)}>{name}</li>
        )
    } 
}
