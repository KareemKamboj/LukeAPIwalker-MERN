import React from 'react'
const PlanetCard = (props) => {
    const {climate, terrain, surface_water, population, name} = props.planet
    return (
        <div>
            <h1>{name}</h1>
            <p>climate: {climate}</p>
            <p>terrain: {terrain}</p>
            <p>Surface Water: {surface_water}</p>
            <p>Population: {population}</p>
        </div>
    )
}

export default PlanetCard   