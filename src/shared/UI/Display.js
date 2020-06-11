import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Paper, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { usersInput } from "../../redux/actions";

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
	display_container: {
		height: "100%",
		border: "1px solid red",
	},
	imageContainer: {
		position: "absolute",
		top: "15%",
	},
	image: {
		maxWidth: "100%",
	},
}));

const Display = (props) => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const [inputValue, setInputValue] = useState("");

	const { inputs, isValid } = useSelector((state) => ({
		inputs: state.inputs,
		isValid: state.isValid,
	}));

	useEffect(() => {
		if (inputValue !== "") {
			dispatch(usersInput(inputValue));
		} else {
			return;
		}
	}, [inputValue]);

	console.log("inputs ==>", inputs);

	const handleChange = (event) => {
		setInputValue(event.target.value);
	};

	return (
		<Grid
			container
			direction="column"
			justify="center"
			alignItems="center"
			className={classes.display_container}>
			<Grid
				item
				container
				justify="center"
				alignItems="center"
				xs={6}
				className={classes.imageContainer}>
				{inputs && (
					<img
						className={classes.image}
						src="https://www.educaro.de/images/logo.png"
						alt="educaro"
					/>
				)}
			</Grid>
			<br />
			<Grid item>
				<form noValidate autoComplete="off" spacing={2}>
					<div>
						<TextField
							error={inputValue !== "" && !isValid}
							id="outlined-error-helper-text"
							label="your pin"
							value={inputValue}
							helperText={
								inputValue !== "" && !isValid
									? "Only numbers required."
									: inputValue.length > 4
									? "wrong pin code"
									: ""
							}
							variant="outlined"
							onChange={handleChange}
						/>
					</div>
				</form>
			</Grid>
		</Grid>

		// 	{/* <Grid container justify="center" className={classes.root} spacing={2}>
		// 	<Grid item xs={3}>
		// 		<Grid container justify="center" wrap="wrap" spacing={2}>
		// 			{[1, 2, 3, 4, 5, 6, 7, 8, 9].map((value) => (
		// 				<Grid key={value} item>
		// 					<Paper
		// 						onClick={(e) => clickHandler(value)}
		// 						className={classes.paper}>
		// 						{value}
		// 					</Paper>
		// 				</Grid>
		// 			))}
		// 		</Grid>
		// 	</Grid>
		// </Grid> */}
	);
};
export default Display;
