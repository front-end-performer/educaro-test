import React, { useEffect, Suspense, lazy } from "react";
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from "react-router-dom";
import theme from "./style/theme";
import { ThemeProvider } from "@material-ui/core/styles";

const AsyncAuth = lazy(() => import("./user/pages/auth"));

const App = (props) => {
	return (
		<Router>
			<ThemeProvider theme={theme}>
				<Suspense fallback={<h1>...</h1>}>
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
