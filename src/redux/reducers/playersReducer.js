export const playersReducer = (state = {players: {}}, action) => {

    switch (action.type)
    {
        case "CREATE_PLAYER":
        {
            const newPlayer = {
                id: action.payload.id,
                firstName : action.payload.firstName,
                lastName : action.payload.lastName,
                age : action.payload.age,
                role : action.payload.role,
                team : action.payload.team
            }
            // console.log(newPlayer)

            const newPlayers = {
                ...state.players,
                [action.payload.id]: newPlayer
            }
            // console.log(newPlayers)

            return {
                ...state,
                players: newPlayers
            }
        }
        case "DELETE_PLAYER" :
        {
            const playerId = action.payload.id
            const updatedPlayers = { ...state.players };
            delete updatedPlayers[playerId];
            return {
                ...state,
                players: updatedPlayers
            }
        }
        case "UPDATE_PLAYER_TEAM" :
        {
            const idPlayer = action.payload.id

            Object.values(state.players).map(player => {
                if(player.id === idPlayer)
                {
                    player.team = null
                }
            })
            return state
        }
        case "UPDATE_PLAYER" :
        {
            const updatedPlayer = action.payload
            const updatedPlayers = Object.values(state.players).map(player => {
                if(player.id === updatedPlayer.id)
                {
                    return updatedPlayer;
                }
                return player;
            })
            return {
                ...state,
                players : updatedPlayers.reduce((acc, player) => {
                    acc[player.id] = player
                    return acc;
                }, {})
            }
        }

        default:
            return state
    }
    
}