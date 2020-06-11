import React, { Suspense, lazy } from "react";
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from "react-router-dom";
import theme from "./style/theme";
import { ThemeProvider } from "@material-ui/core/styles";

import Spinner from "./shared/UI/Spinner";

const AsyncAuth = lazy(() => import("./user/pages/Auth"));

const App = (props) => {
	return (
		<Router>
			<ThemeProvider theme={theme}>
				<Suspense fallback={<Spinner />}>
					<Switch>
						<Route exact path="/" component={AsyncAuth} />
						<Redirect to="/" />
					</Switch>
				</Suspense>
			</ThemeProvider>
		</Router>
	);
};

export default App;
