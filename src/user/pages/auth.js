import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

import Display from "../../shared/UI/Display";
// import KeyBoard from "../../shared/UI/KeyBoard";

const useStyles = makeStyles((theme) => ({
	root: {
		height: "100vh",
	},
	wrapper: {
		border: "1px solid red",
		height: "100%",
	},
}));

export default function CenteredGrid() {
	const classes = useStyles();

	return (
		<Grid container alignItems="center" className={classes.root}>
			<Grid
				item
				container
				xs={12}
				justify="center"
				alignItems="center"
				className={classes.wrapper}>
				<Display />
			</Grid>
		</Grid>
	);
}
