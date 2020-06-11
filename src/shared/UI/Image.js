import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	imageContainer: {
		position: "absolute",
		top: "20%",
	},
	image: {
		maxWidth: "100%",
	},
}));

const Image = () => {
	const classes = useStyles();
	return (
		<Grid
			item
			container
			xs={6}
			justify="center"
			alignItems="center"
			className={classes.imageContainer}>
			<img
				className={classes.image}
				src="https://www.educaro.de/images/logo.png"
				alt="educaro"
			/>
		</Grid>
	);
};

export default Image;
