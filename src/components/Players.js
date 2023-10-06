import { useState } from "react";
import { NewPlayerForm } from "./NewPlayerForm";
import { useDispatch } from "react-redux";
import { ModifyPlayerForm } from "./ModifyPlayerForm";

export const Players = ({players, teams}) => {
    // console.log(players)
    const [formNew, setFormNew] = useState(false);
    const [modifyForm, setModifyForm] = useState(false)


    const dispatch = useDispatch();

    const handleClick = () => {
        setFormNew(true);
    }

    const handleDelete = (id, team) => {

        console.log("delete")
        dispatch({
            type:"DELETE_PLAYER",
            payload: {
                id
            }
        })

        dispatch({
            type: "DELETE_PLAYER_TEAM",
            payload : {
                id,
            }
        })
    }

    const handleModify = () => {
        setModifyForm(true)
    }

    

    return(
        <>
            <button className="button-30" onClick={handleClick}>Créer un joueur</button>
            {
                formNew && Object.keys(teams.teams).length > 0 && (
                    <NewPlayerForm teams={teams} players={players} setFormNew={setFormNew} />
                )

            }
            {
            
            Object.keys(players.players).length > 0 ? 

            Object.values(players.players).map(player =>
                <div className="player__container">
                    <ul className="player__info__container">
                        {/*<li className="player__info">ID: {player.id}</li>*/}
                        <li className="player__info">Nom: {player.firstName}</li>
                        <li className="player__info">Prénom: {player.lastName}</li>
                        <li className="player__info">Age: {player.age}</li>
                        <li className="player__info">Rôle: {player.role}</li>
                        <li className="player__info">Équipe: {player.team}</li>
                    </ul>
                    <div className="button__container">
                        <button className="button-30" onClick={() => handleDelete(player.id, player.team)}>Supprimer le joueur</button>
                        <button className="button-30" onClick={handleModify}>Modifier le joueur</button>
                    </div>
                    { modifyForm && <ModifyPlayerForm {...{ player, setModifyForm }}/>}
                </div>
                )
            :
            <div>
                <p>pas de joueurs</p>

            </div>
            }
        </>
    )
}