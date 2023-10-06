import { useState } from "react"
import { useDispatch } from "react-redux"

export const NewTeamForm = ({setFormNew}) => {

    const dispatch = useDispatch();

    const [team, setTeam] = useState({
        name: "",
        color: "",
        players: [],
        substitutePlayers: []
      })

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({
            type: "CREATE_TEAM", 
            payload: {
                name: team.name,
                color: team.color,
                players: [],
                substitutePlayers: []
            }
        })

        setTeam({
            name: "",
            color: "",
            players: [],
            substitutePlayers: []
        })

        setFormNew(false)
    }

    const handleChange = (e) => {
        setTeam({...team, [e.target.name]: e.target.value})
    }

    return(
        <>
            <form onSubmit={handleSubmit} className="NewTeamForm">
                <h2 className={"NewTeamForm__title"}>Formulaire de création d'équipes:</h2>

                <label htmlFor={"teamName"}>Nom :</label>
                <input className="input--text" type="text" value={team.name} name="name" onChange={handleChange}></input>
                <label htmlFor={"teamColor"}>Couleur :</label>
                <input className="input--text" type="text" value={team.color} name="color" onChange={handleChange}></input>
                <button className="button-30" type={"submit"}>Créer une équipe</button>
            </form>
        </>
    )
}