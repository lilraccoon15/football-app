import { useState } from "react";
import { useDispatch } from "react-redux"

export const NewPlayerForm = ({teams, setFormNew}) => {

    const dispatch = useDispatch();

    const [player, setPlayer] = useState({
        id : 1, 
        firstName : "",
        lastName : "",
        age : "",
        role : "",
        team : ""
    })


    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: "CREATE_PLAYER",
            payload : {
                id : player.id,
                firstName : player.firstName,
                lastName: player.lastName,
                age: player.age,
                role: player.role,
                team: player.team
            }
        })

        setPlayer(prevPlayer => ({
            id: prevPlayer.id + 1,
            firstName: "",
            lastName: "",
            age: "",
            role: "",
            team: ""
        }));

        setFormNew(false)
    }

    const handleChange = (e) => {
        console.log(e.target.value)
        console.log(e.target.name)
        setPlayer({...player, [e.target.name]: e.target.value})
    }

    return(
        <form onSubmit={handleSubmit} className={"NewPlayerForm"}>
            <h2 className={"NewPlayerForm__title"}>Formulaire d'ajout de joueur :</h2>

            <label htmlFor={"last_name"}>Nom :</label>
            <input type="text" value={player.lastName} name="lastName" onChange={handleChange}></input>
            <label htmlFor={"first_name"}>Prénom :</label>
            <input type="text" value={player.firstName} name="firstName" onChange={handleChange}></input>
            <label htmlFor={"age"}>Âge :</label>
            <input type="number" value={player.age} name="age" min="18" max="40" onChange={handleChange}></input>
            <label htmlFor={"role"}>Poste :</label>
            <input type="text" value={player.role} name="role" onChange={handleChange}></input>
            <label htmlFor="team">Choix de l'équipe</label>
            <select name="team" id="team" onChange={handleChange}>
                <option default>choisissez une équipe</option>
                {Object.values(teams.teams).map(team => {
                return (
                    <option key={team.name} value={team.name}>{team.name}</option>
                )
                })}
            </select>
            <button className="submitButton">Ajouter le joueur</button>
            </form>
    )
}