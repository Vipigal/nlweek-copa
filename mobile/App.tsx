import { NativeBaseProvider, StatusBar } from "native-base";
import { useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto'

import { Loading } from './src/components/Loading';
import { SignIn } from './src/screens/SignIn';

import { THEME } from './src/styles/themes';
import { AuthConextProvider } from "./src/contexts/AuthContext";

export default function App() {
	const [fontsLoaded] = useFonts({Roboto_400Regular, Roboto_500Medium, Roboto_700Bold});

	return (
		<NativeBaseProvider theme={THEME}>
			<AuthConextProvider>
				<StatusBar
					barStyle="light-content"
					backgroundColor="transparent"
					translucent
				/>
				{fontsLoaded ? <SignIn /> : <Loading />}
			</AuthConextProvider>
		</NativeBaseProvider>
	);
}

