import { useEffect } from "react";
import { Players } from "./Players"
import { Teams } from "./Teams"
import { Header } from './Header'
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
            <Header/>
            <div className="main__container">
              {
                  Object.keys(teams.teams).length > 0 && (
                      <Players {...{ teams, players }}/>
                  )
              }
              <Teams teams={teams}/>
            </div>
        </>
    )
}