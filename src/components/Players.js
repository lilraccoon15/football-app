import { useState } from "react";
import { NewPlayerForm } from "./NewPlayerForm";

export const Players = ({players, teams}) => {
    console.log(players)
    const [formNew, setFormNew] = useState(false);

    const handleClick = () => {
        setFormNew(true);
    }

    return(
        <>
        {
            formNew && Object.keys(teams.teams).length > 0 && (
                <NewPlayerForm teams={teams} setFormNew={setFormNew} />
            )

        }
        {
            Object.keys(players.players).length > 0 ? 

            Object.values(players.players).map(player =>
                <div>
                    <p>{player.firstName}</p>
                    <p>{player.lastName}</p>
                    <p>{player.age}</p>
                    <p>{player.role}</p>
                    <p>{player.team}</p>
                </div>
                )
            :
            <div>
                <p>pas de joueurs</p>
                <button onClick={handleClick}>Créer un joueur</button>
            </div>
        }
        </>
    )
}