import React from 'react'
import './person-details.css'

const PersonDetails = ({selectedPerson}) => {
    const {name, gender, birthYear, eyeColor} = selectedPerson
    return (
        <div className="col-md-7 bg-dark personDetails">
            <div className="row">
                <div className="col-sm-4">
                    <img className="img-fluid personImg" alt=""
                     src="https://upload.wikimedia.org/wikipedia/ru/3/39/R2-D2_Droid.png" />
                </div>
                <div className="col-sm-8">
                    <p className="propertyName">Person Name:</p>
                    <h1 className="boldInfo">{name}</h1>
                    <p className="person-info">Person gender: <b className="boldInfo">{gender}</b></p>
                    <p className="person-info">Person birthday: <b className="boldInfo">{birthYear}</b></p>
                    <p className="person-info">Person eye  color: <b className="boldInfo">{eyeColor}</b></p>
                </div>
            </div>

        </div>
    )
}

export default PersonDetails;