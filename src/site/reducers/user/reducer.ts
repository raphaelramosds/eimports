import { User } from "@/@types/User"
import { UserActionTypes } from "./actions"
import { produce } from "immer"

export interface UserState extends User { }

export function userReducer(state: UserState, action: any) {
    switch (action.type) {
        case UserActionTypes.UPDATE_USER:
            {
                return produce(state, (draft) => {
                    return {
                        ...draft,
                        ...action.payload
                    }
                })
            }
        case UserActionTypes.LOGOUT:
            {
                localStorage.removeItem('@eimports:user-1.0.0')
                return produce(state, (draft) => {
                    draft.access_token = ''
                    draft.name = ''
                    draft.login = ''
                })
            }

        default:
            return state
    }
}