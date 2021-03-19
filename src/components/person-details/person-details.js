import React, { Component } from 'react'
import SwapiService from '../../services/SwapiService'
import ErrorComponent from '../errorComponent'
import Spiner from '../spinner'
import './person-details.css'

export default class PersonDetails extends Component { 

    state = {
        person: null,
        id: null,
        loading: true,
        error: false
    }
    componentDidMount() {
        this.updatePerson()
    };
    componentDidUpdate(prevProps) {
        if (prevProps.selectedPerson !== this.props.selectedPerson) {
            this.updatePerson()
        }
    }
    swapi = new SwapiService();
    updatePerson() {
        this.setState({loading: true})
        const {selectedPerson} = this.props;
        if (!selectedPerson) {
            return;
        }
        this.swapi.getPersonById(selectedPerson)
        .then(person =>  this.setState({person, loading:false}))
        .catch(err => this.setState({error:true}))
    }
    

    render() {
        if (this.state.error) {
            return (<div className="col-md-7 personDetails"><ErrorComponent/></div>)
        }
        else if (this.state.loading) {
            return(<div className="col-md-7 personDetails"><Spiner/></div>)
        }   else {      
        const {person} = this.state;
        const {name, id, gender, birthYear, eyeColor} = this.state.person 

        return (
                <div className="container">
                    <div className="col bg-dark personDetails">
                        <div className="row"> 
                            {person ?
                            <React.Fragment>
                            <div className="col-sm-4">
                                <img className="img-fluid personImg" alt=""
                                src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} /> 
                                
                            </div>
                            <div className="col-sm-8">
                                <p className="propertyName">Person Id: {id}</p>
                                <h1 className="boldInfo">{name}</h1>
                                <p className="person-info">Person gender: <b className="boldInfo">{gender}</b></p>
                                <p className="person-info">Person birthday: <b className="boldInfo">{birthYear}</b></p>
                                <p className="person-info">Person eye  color: <b className="boldInfo">{eyeColor}</b></p>
                                
                                <button onClick={()=> console.log(this.state)}>test</button>
                            </div></React.Fragment> : null}
                        </div>
                    </div>
                </div>
        )
    }
    }
}
    
