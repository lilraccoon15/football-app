import { useEffect } from "react";
import { Players } from "./Players"
import { Teams } from "./Teams"
import { useSelector } from "react-redux";

export const Main = () => {

    const players = useSelector(state => state.players || JSON.parse(localStorage.getItem('players')) || {});
    const teams = useSelector(state => state.teams || JSON.parse(localStorage.getItem('teams')) || {});

    useEffect(() => {
        localStorage.setItem('teams', JSON.stringify(teams));
      }, [teams]);

      useEffect(() => {
        localStorage.setItem('players', JSON.stringify(players));
      }, [players]);

    return(
        <>
            <h1>appli</h1>

            {
                Object.keys(teams.teams).length > 0 && (
                    <Players {...{ teams, players }}/>
                )
            }
            <Teams teams={teams}/>
        </>
    )
}