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
                color: action.payload.color
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
        default :
            return state
    }
}