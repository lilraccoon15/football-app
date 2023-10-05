import { useDispatch } from "react-redux"
import { useState } from "react";
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
        console.log(modifyForm)
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
                <div>
                    <p>{team.name}</p>
                    <p>{team.color}</p>
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