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

            const newPlayers = {
                ...state.players,
                [action.payload.id]: newPlayer
            }

            return {
                ...StaticRange,
                players: newPlayers
            }
        }

        default:
            return state
    }
    
}