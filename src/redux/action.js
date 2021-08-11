import { ActionTypes } from "./constant"

export const allBank = (allBank) => {
    return {
        type: ActionTypes.ALL_BANK,
        payload: allBank,
    }
}

export const addToFavourites = (favBank) => {
    return {
        type: ActionTypes.ADD_TO_FAV,
        payload: favBank,
    }
}

export const removeFromFavourites = (favBank) => {
    return {
        type: ActionTypes.REMOVE_FROM_FAV,
        payload: favBank,
    }
}