 import React, { useEffect } from 'react';
import {Text} from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './Redux';
import Root from './RootStack';

const app = () =>{
    useEffect(() => {
		if (Text.defaultProps == null) Text.defaultProps = {};
		Text.defaultProps.allowFontScaling = false;
	}, []);
    return (
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<NavigationContainer>
					<Root />
				</NavigationContainer>
			</PersistGate>
		</Provider>
	);
 
}
export default app
