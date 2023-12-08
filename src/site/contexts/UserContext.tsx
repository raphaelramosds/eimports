'use client'

import { User } from "@/@types/User";
import { logoutAction, updateUserAction } from "@/reducers/user/actions";
import { UserState, userReducer } from "@/reducers/user/reducer";
import { useCallback, useEffect, useLayoutEffect, useReducer } from "react";
import { createContext } from "use-context-selector";

interface UserContextType extends UserState {
    updateUser: (user: User) => void;
    logout: () => void;
}

export const UserContext = createContext({} as UserContextType)

export function UserContextProvider({ children }: { children: React.ReactNode }) {
    const [state, dispatch] = useReducer(userReducer, {
        access_token: '',
        name: '',
        login: ''
    })

    const { access_token, name, login } = state

    const updateUser = useCallback((user: User) => {
        dispatch(updateUserAction(user))
    }, [])

    const logout = useCallback(() => {
        dispatch(logoutAction())
    }, [])

    useLayoutEffect(() => {
        if (!access_token) {
            const userJSON = localStorage.getItem('@eimports:user-1.0.0')
            if (userJSON) {
                const user = JSON.parse(userJSON)
                dispatch(updateUserAction(user))
            }
        }
    }, [])

    useEffect(() => {
        if (access_token) {
            const stateJSON = JSON.stringify(state)
            localStorage.setItem('@eimports:user-1.0.0', stateJSON)
        }
    }, [state])

    return (
        <UserContext.Provider value={{ access_token, name, login, updateUser, logout }}>
            {children}
        </UserContext.Provider>
    )
}