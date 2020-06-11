import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

import Display from "../components/Display";

const useStyles = makeStyles((theme) => ({
	root: {
		height: "100vh",
	},
}));

export default function CenteredGrid() {
	const classes = useStyles();

	return (
		<Grid
			container
			justify="center"
			alignItems="center"
			className={classes.root}>
			<Display />
		</Grid>
	);
}
