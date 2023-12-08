import { User } from "@/@types/User"

export enum UserActionTypes {
    UPDATE_USER = 'UPDATE_USER',
    LOGOUT = 'LOGOUT'
}

export function updateUserAction(user: User) {
    return {
        type: UserActionTypes.UPDATE_USER,
        payload: user
    }
}

export function logoutAction() {
    return {
        type: UserActionTypes.LOGOUT,
        payload: {}
    }
}