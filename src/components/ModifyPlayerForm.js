import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export const ModifyPlayerForm = ({player, setModifyForm}) => {

    const dispatch = useDispatch();
    const [newPlayer, setNewPlayer] = useState(player)

    useEffect(() => {
        setNewPlayer(player);
    }, [player]);

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch({
            type: "UPDATE_PLAYER",
            payload: newPlayer
        })

        dispatch({
            type: "UPDATE_TEAM_PLAYER",
            payload: newPlayer
        })
        // setModifyForm(false)
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setNewPlayer(prevPlayer => ({
            ...prevPlayer,
            [name]: value
        }));
    }

    return(
        <form onSubmit={handleSubmit} className={"NewPlayerForm"}>
            <h2 className={"NewPlayerForm__title"}>Formulaire de modification de joueur :</h2>

            <label htmlFor={"last_name"}>Nom :</label>
            {/* @todo le setupdate à corriger */}
            <input className="input--text" type="text" value={newPlayer.lastName} name="lastName" onChange={handleChange}></input>
            <label htmlFor={"first_name"}>Prénom :</label>
            <input className="input--text" type="text" value={newPlayer.firstName} name="firstName" onChange={handleChange}></input>
            <label htmlFor={"age"}>Âge :</label>
            <input className="input--text" type="number" value={newPlayer.age} name="age" min="18" max="40" onChange={handleChange}></input>
            <label htmlFor={"role"}>Poste :</label>
            <input className="input--text" type="text" value={newPlayer.role} name="role" onChange={handleChange}></input>
            <button className="button-30" type={"submit"}>Modifier le joueur</button>
        </form>
    )
}