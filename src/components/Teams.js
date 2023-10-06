import { useDispatch } from "react-redux"
import { useEffect, useState } from "react";
import { NewTeamForm } from "./NewTeamForm";
import { ModifyTeamForm } from "./ModifyTeamForm";


export const Teams = ({teams}) => {
    
    const [formNew, setFormNew] = useState(false);
    const [modifyForm, setModifyForm] = useState(false)
    
    const dispatch = useDispatch();

    const handleClick = () => {
        setFormNew(true);
    }

    const handleDelete = (name) => {

        dispatch({
            type:"DELETE_TEAM",
            payload: {
                name
            }
        })
    }

    const handleModify = () => {
        setModifyForm(true)
    }

    const handleDeletePlayer = (id, team) => {

        dispatch({
            type: "UPDATE_TEAM_PLAYERS",
            payload : {
                id,
                team
            }
        })

        dispatch({
            type: "UPDATE_PLAYER_TEAM",
            payload : {
                id,
                team
            }

        })

    }


    return(
        <>
        <button onClick={handleClick}>Créer une équipe</button>
        {
            formNew && (
                <NewTeamForm setFormNew={setFormNew }/>
            )
        }
        {
            Object.keys(teams.teams).length > 0 
            
            ?

            Object.values(teams.teams).map(team => 
                <div key={team.name}>
                    <p>{team.name}</p>
                    <p>{team.color}</p>
                    {
                        Object.values(team.players).map(player =>
                            <div key={player.id}>
                                <p>{player.id}</p>
                                <p>{player.firstName}</p> 
                                <button onClick={() => handleDeletePlayer(player.id, player.team)}>X</button> 
                            </div>  
                        )
                        
                    }
                    <button onClick={() => handleDelete(team.name)}>Supprimer l'équipe</button>
                    <button onClick={handleModify}>Modifier l'équipe</button>
                { modifyForm && <ModifyTeamForm {...{ team, setModifyForm }}/>}
                </div>
            )

            :

            <div>
                <p>pas d'équipes</p>
            </div>
        }
        </>
    )
}