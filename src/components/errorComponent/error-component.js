import React from 'react'
import './error-component.css'

const ErrorComponent = () => {
    return(
        <div className="container bg-dark errorComponent">
            <h1>Something went wrong, but we already sent droids to fix it,</h1>
            <h1>please try to reload the page</h1>
        </div>
    )
}


export default ErrorComponent;