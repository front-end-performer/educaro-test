import React, { useState, useEffect } from "react";
import { Grid, Paper, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

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

const Display = () => {
	const classes = useStyles();
	const [inputValue, setInputValue] = useState("");
	const [error, setError] = useState(false);

	const handleChange = (event) => {
		setInputValue(event.target.value);
	};

	useEffect(() => {
		console.log(inputValue);
	}, [inputValue]);

	return (
		<>
			<Grid container justify="center">
				<form noValidate autoComplete="off" spacing={2}>
					<div>
						<TextField
							error={false}
							id="outlined-error-helper-text"
							label="pin"
							value={inputValue}
							helperText={error && "Incorrect entry."}
							variant="outlined"
							onChange={handleChange}
						/>
					</div>
				</form>
			</Grid>

			{/* <Grid container justify="center" className={classes.root} spacing={2}>
				<Grid item xs={3}>
					<Grid container justify="center" wrap="wrap" spacing={2}>
						{[1, 2, 3, 4, 5, 6, 7, 8, 9].map((value) => (
							<Grid key={value} item>
								<Paper
									onClick={(e) => clickHandler(value)}
									className={classes.paper}>
									{value}
								</Paper>
							</Grid>
						))}
					</Grid>
				</Grid>
			</Grid> */}
		</>
	);
};
export default Display;
