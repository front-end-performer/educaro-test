import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Animated } from "react-animated-css";

import Image from "../../shared/UI/Image";
import Input from "../../shared/UI/Input";

const useStyles = makeStyles((theme) => ({
	display_container: {
		height: "100%",
		position: "relative",
	},
}));

const Display = () => {
	const classes = useStyles();

	const { inputs } = useSelector((state) => ({
		inputs: state.inputs,
	}));

	return (
		<Grid
			item
			container
			justify="center"
			alignItems="center"
			className={classes.display_container}>
			{inputs && <Image />}
			<Input />
		</Grid>
	);
};
export default Display;
