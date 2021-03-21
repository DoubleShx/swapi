import React, { Component } from 'react'
import SwapiService from '../../services/SwapiService'
import ErrorComponent from '../errorComponent'
import Spiner from '../spinner'
import './details.css'

export default class Details extends Component { 

    state = {
        renderer: null,
        id: null,
        loading: true,
        error: false
    }
    componentDidMount() {
        console.log(this.props)
        this.updatePerson()
    };
    componentDidUpdate(prevProps) {
        if (prevProps.selectedId !== this.props.selectedId) {
            this.updatePerson()
        }
    }
    swapi = new SwapiService();
    updatePerson() {
        this.setState({loading: true})
        const {selectedId, path} = this.props;
        if (!selectedId) {
            return;
        }
        this.swapi.getById(path, selectedId)
        .then(renderer =>  this.setState({renderer, loading:false}))
        .catch(err => this.setState({error:true}))
    }
    

    render() {
        if (this.state.error) {
            return (<div className="col-md-7 personDetails"><ErrorComponent/></div>)
        }
        else if (this.state.loading) {
            return(<div className="col-md-7 personDetails"><Spiner/></div>)
        }   else {      
        const {renderer} = this.state;
        const {name, id} = this.state.renderer;
        let { url } = this.props
        if (url.indexOf('/people') !== -1) {
            url = `/characters/${id}`
        }
        return (
                <div className="container">
                    <div className="row bg-dark personDetails">
                        <div className="row"> 
                            <div className="col-sm-4">
                                <img className="img-fluid personImg" alt=""
                                src={`https://starwars-visualguide.com/assets/img${url}.jpg`} /> 
                                
                            </div>

                            <div className="col-sm-8">
                                <p className="propertyName"> Id: {id}</p>
                                <h1 className="boldInfo">{name}</h1>
                            {Object.entries(renderer).map(([key, value], index) => {
                                if (key !== 'id' && key !=='name' && value !== undefined) {
                                return (
                                    <p className="person-info" key={index}>{key}: <b className="boldInfo">{value}</b></p>      
                                )
                                }
                            })
                            }  
                            </div>
                            
                        </div>
                    </div>
                </div>
        )
    }
    }
}
    
