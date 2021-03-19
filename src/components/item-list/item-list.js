import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import SwapiService from '../../services/SwapiService'
import ErrorComponent from '../errorComponent';
import Spiner from '../spinner';
import './item-list.css'

export default class ItemList extends Component {

    state = {
        renderItems: [],
        path: null,
        error: false,
        loading: true,
    }

    swapi = new SwapiService();
    componentDidMount() {
        const {path} = this.props;
        this.setState({path})
        console.log('Mount', path)
        this.setRenderer(path)
        
    }

    setRenderer(path) {
        if (path === '/people') {
            this.swapi.getAllPeople()
                .then(renderItems => {
                    this.setState({
                    renderItems, loading: false
                }); })
                .catch(err => 
                    {console.log(err)
                        this.setState({error: true})
                    });
            }
        
        if (path === '/planets') {
            this.swapi.getAllPlanets()
            .then(renderItems => {
                this.setState({renderItems, loading:false});               
             })
            .catch(err => {
                     this.setState({error:true})
            });
        }
         if (path === '/starships') {
        this.swapi.getAllStarships()
            .then(renderItems => {
                this.setState({renderItems, loading:false});                
            })
            .catch(err => {console.log(err); this.setState({error: true})})
        } 
        
    }
    

         render() {
        
        const {renderItems, loading, error, path} = this.state;
            
    return ( <div className="container">
                <div className="row">
                    <div className="col itemList alert">
                        <this.DidntChosen/>
                    <button onClick={()=> console.log(this.state)}>State Item-List</button>
                        <ul className="list-group">
                            { error? <ErrorComponent/> :
                            loading? <Spiner/> :
                                renderItems.map(el => {
                                return (    
                                    <NavLink key = {el.id} to={`${path}/${el.id}`}>                              
                                    <this.PersonView                                                                        
                                    name = {el.name} 
                                    /> 
                                    </NavLink>                                    
                                )
                            })}
                        </ul> 
                        </div>                              
                    </div>
                 </div>
            )
    }

    DidntChosen = () => {
        return (
            <div className="col alert alert-dark detailsInvisible">
                <h1>Chose some item to get information about it</h1>
            </div>
        )
    }

    PersonView = ({name, person}) => {
        return (
        <li className="list-group-item whenActive unselectable">{name}</li>
        )
    } 
}
