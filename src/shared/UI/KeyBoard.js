import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		height: 40,
		width: 40,
		alignItems: "center",
		display: "flex",
		justifyContent: "center",
	},
}));

const Keyboard = () => {
	const classes = useStyles();
	const [error, setError] = useState(null);
	const [inputValue, setInputValue] = useState("");

	const clickHandler = (e) => {
		setInputValue(e);
		console.log(e);
	};

	return (
		<Grid container justify="center" className={classes.root} spacing={2}>
			<Grid item xs={3}>
				<Grid container justify="center" wrap="wrap" spacing={2}>
					{[1, 2, 3, 4, 5, 6, 7, 8, 9].map((value) => (
						<Grid key={value} item>
							<Paper
								onClick={(e) => clickHandler(`${value}`)}
								className={classes.paper}>
								{value}
							</Paper>
						</Grid>
					))}
				</Grid>
			</Grid>
		</Grid>
	);
};

export default Keyboard;
