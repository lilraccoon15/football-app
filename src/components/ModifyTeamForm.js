import { useState } from "react";
import { useDispatch } from "react-redux"

export const ModifyTeamForm = ({team, setModifyForm}) => {

    const dispatch = useDispatch();
    const [newColor, setNewColor] = useState(team.color)

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: "UPDATE_TEAM",
            payload: {
                name:team.name,
                color:newColor
            }
        })
        setModifyForm(false)
    }

    const handleChange = (e) => {
        setNewColor(e.target.value)
    }


    return(
        <form onSubmit={handleSubmit} className={"NewPlayerForm"}>
            <h2 className={"NewTeamForm__title"}>Formulaire de modification d'équipes:</h2>

            <label htmlFor={"teamName"}>Nom :</label>
            <input type="text" value={team.name} name="name" onChange={handleChange} disabled></input>
            <label htmlFor={"teamColor"}>Couleur :</label>
            <input type="text" value={newColor} name="color" onChange={handleChange}></input>
            <button className={"submitButton"} type={"submit"}>Modifier l'équipe</button>
        </form>
    )
}