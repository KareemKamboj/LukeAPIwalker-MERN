import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import Axios from 'axios';
import SearchBar from './SearchBar';
import PersonCard from './PersonCard';
import PlanetCard from './PlanetCard';
import ErrorCard from './ErrorCard';

const Wrapper = (props) => {
    const{type, id} = useParams()

    const [person, setPerson] = useState(null);
    const [planet, setPlanet] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        console.log(type, id)
        Axios.get(`https://swapi.dev/api/${type}/${id}`)
            .then(res => {
                console.log(res)
                if(type === "people") {
                    setPerson(res.data);
                    setPlanet(null);
                    setError(null)
                }
                else if (type === "planets") {
                    setPlanet(res.data);
                    setPerson(null);
                    setError(null)
                }
            })
            .catch(err => {
                console.log(err.response.status);
                    setPlanet(null);
                    setPerson(null);
                    setError("These are not the drones you are looking for")
            });
    }, [type, id])

    return (
        <div>
            <SearchBar/>
            {
                person && <PersonCard person={person}/>
            }
            {
                planet && <PlanetCard planet={planet}/>
            }
            {
                error && <ErrorCard error={error}/>
            }
        </div>
    )
}

    export default Wrapper