export const teamsReducer = (state = {teams: {} }, action) => {
    switch (action.type)
    {
        case "CREATE_TEAM" : 
        {
            const newTeam = {
                name: action.payload.name,
                color: action.payload.color,
                players: [],
                substitutePlayers: []
            }

            const newTeams = {
                ...state.teams,
                [action.payload.name]: newTeam
            };

            return {
                ...state,
                teams: newTeams
            };
        }
        case "DELETE_TEAM" :
        {
            const teamName = action.payload.name
            const updatedTeams = { ...state.teams };
            delete updatedTeams[teamName];
            return {
                ...state,
                teams: updatedTeams
            }
        }
        case "UPDATE_TEAM" :
        {
            const updatedTeam = {
                name: action.payload.name,
                color: action.payload.color,
            }
            const updatedTeams = { 
                ...state.teams,
                [updatedTeam.name]: updatedTeam
            }
            return {
                ...state,
                teams:updatedTeams
            }
        }
        case "ADD_PLAYER_TEAM" :
        {
            const teamName = action.payload.name;
            const newPlayer = action.payload.players
            console.log(newPlayer)
            Object.values(state.teams).map(team => {
                if(team.name === teamName)
                {
                    team.players.push(newPlayer)
                }
            })
            return state
        }
        case "DELETE_PLAYER_TEAM" :
        {
            const idPlayer = action.payload.id
            const teamName = action.payload.team 
            Object.values(state.teams).map(team => {
                if(team.name === teamName)
                {
                    if(team.players.length > 1)
                    {
                        team.players = team.players.filter(player => player.id !== idPlayer)
                    }
                    else if(team.players.length === 1)
                    {
                        team.players = team.players.filter(player => player.id === idPlayer)
                    }
                }
            })
            return state
        }
        case "UPDATE_TEAM_PLAYERS" :
        {
            const idPlayer = action.payload.id;
            const teamName = action.payload.team;

            const updatedTeams = Object.values(state.teams).map(team => {
                if (team.name === teamName) {
                    let updatedPlayers;

                    if (team.players.length > 1) {
                        updatedPlayers = team.players.filter(player => player.id !== idPlayer);
                    } else if (team.players.length === 1) {
                        updatedPlayers = [];
                    }

                    return {
                        ...team,
                        players: updatedPlayers
                    };
                } else {
                    return team;
                }
            });

            return {
                ...state,
                teams: updatedTeams.reduce((acc, team) => {
                    acc[team.name] = team;
                    return acc;
                }, {})
            };
        }
        case "UPDATE_TEAM_PLAYER" :
        {

            // const updatedPlayer = action.payload;
            console.log("ici")
            // const updatedTeams = Object.values(state.teams).map(team => {
            //     console.log("ierufuegyu");
            //     if (team.name === updatedPlayer.team) {
            //         const updatedPlayers = team.players.map(player => {
            //             console.log("coucou")
            //             if (player.id === updatedPlayer.id) {
            //                 console.log("test")
            //                 return updatedPlayer;
            //             }
            //             return player;
            //         });

            //         return {
            //             ...team,
            //             players: updatedPlayers
            //         };
            //     }
            //     return team;
            // });

            // return {
            //     ...state,
            //     teams: updatedTeams.reduce((acc, team) => {
            //         acc[team.name] = team;
            //         return acc;
            //     }, {})
            // };

        }
        
        default :
            return state
    }
}