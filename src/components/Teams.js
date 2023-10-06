import { useDispatch } from "react-redux"
import { useEffect, useState } from "react";
import { NewTeamForm } from "./NewTeamForm";
import { ModifyTeamForm } from "./ModifyTeamForm";
import {ModifyPlayerForm} from "./ModifyPlayerForm";


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
        <button className="button-30" onClick={handleClick}>Créer une équipe</button>
        {
            formNew && (
                <NewTeamForm setFormNew={setFormNew }/>
            )
        }
        {
            Object.keys(teams.teams).length > 0 
            
            ?

            Object.values(teams.teams).map(team => 
                <div className="team__container" key={team.name}>
                    <p>{team.name}</p>
                    <p>{team.color}</p>
                    {
                        Object.values(team.players).map(player =>
                            <div className="player__container" key={player.id}>
                                <ul className="player__info__container">
                                    {/*<li className="player__info">ID: {player.id}</li>*/}
                                    <li className="player__info">Nom: {player.firstName}</li>
                                    <li className="player__info">Prénom: {player.lastName}</li>
                                    <li className="player__info">Age: {player.age}</li>
                                    <li className="player__info">Rôle: {player.role}</li>
                                    <li className="player__info">Équipe: {player.team}</li>
                                </ul>
                                <button className="button-30" onClick={() => handleDeletePlayer(player.id, player.team)}>Supprimer de l'équipe</button>
                            </div>
                        )
                        
                    }
                    <div className="button__container">
                        <button className="button-30" onClick={() => handleDelete(team.name)}>Supprimer l'équipe</button>
                        <button className="button-30" onClick={handleModify}>Modifier l'équipe</button>
                    </div>
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