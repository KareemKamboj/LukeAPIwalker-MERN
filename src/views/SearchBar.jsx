import { useState } from 'react'
import { useNavigate } from "react-router-dom";

const SearchBar = (props) => {
    const [formInfo, setFormInfo] = useState({
        type: "error",
        id: "id number here"
    })
    const navigate = useNavigate();

    const handleInput = (e) => {
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value
        });
    }

const submitHandler = (e) => {
    e.preventDefault()
    const {type, id} = formInfo;

    navigate(`/home/${type}/${id}`)
    setFormInfo({
        type: type,
        id: id
    })
}

return (
    <div style={{}}>
        <h3 className="text-center">Search for:</h3>
        <form onSubmit={submitHandler}>
            <select name="type" onChange={handleInput}>
                <option value="error">--select one--</option>
                <option value="planets">Planets</option>
                <option value="people">Person</option>
            </select>
            <input type="number" name="id" placeholder={formInfo.id} onChange={handleInput} />
            <button>Search</button>
        </form>
    </div>
)
}

export default SearchBar