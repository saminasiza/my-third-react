import { useState } from "react"

export default function Team() {
    const [team, setTeam] = useState(10)
    const handleAdd = () => {
        const newTeam = team + 5
        setTeam(newTeam)
    }

    const handleReduce = () => {
        const newTeam = team - 10
        setTeam(newTeam)
    }
    const teamStyle = {
        border: '2px solid green',
        padding: '5px',
        margin: '20px',
        borderRadius: '10px'
    }
    return (
        <div style={teamStyle}>
            <h3>Players:{team}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleReduce}>Reduce</button>
        </div>
    )
}