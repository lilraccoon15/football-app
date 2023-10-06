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
        <button onClick={handleClick}>Créer un joueur</button>
        {
            formNew && Object.keys(teams.teams).length > 0 && (
                <NewPlayerForm teams={teams} players={players} setFormNew={setFormNew} />
            )

        }
        {
            
            Object.keys(players.players).length > 0 ? 

            Object.values(players.players).map(player =>
                <div>
                    <p>{player.id}</p>
                    <p>{player.firstName}</p>
                    <p>{player.lastName}</p>
                    <p>{player.age}</p>
                    <p>{player.role}</p>
                    <p>{player.team}</p>
                    <button onClick={() => handleDelete(player.id, player.team)}>Supprimer le joueur</button>
                    <button onClick={handleModify}>Modifier le joueur</button>
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