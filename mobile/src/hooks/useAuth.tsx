import { useContext } from "react";

import { AuthConext, AuthContextDataProps } from "../contexts/AuthContext";

export function useAuth(): AuthContextDataProps {
	const context = useContext(AuthConext);
	return context;
}