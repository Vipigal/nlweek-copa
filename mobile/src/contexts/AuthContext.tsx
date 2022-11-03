import { createContext, ReactNode } from "react";

interface UserProps {
	name: string;
	avatarURL: string;
}


export interface AuthContextDataProps {
	user: UserProps,
	signIn: () => Promise<void>,
}

interface AuthProviderProps{
	children: ReactNode;
}


export const AuthConext = createContext({} as AuthContextDataProps);

export function AuthConextProvider({ children }: AuthProviderProps) {

	async function signIn() { console.log('login') }

	return (
		<AuthConext.Provider value={{
			signIn,
			user: {
				name: 'Vinicius',
				avatarURL: ''
			}
		}}>
			{children}
		</AuthConext.Provider>

	)

}
