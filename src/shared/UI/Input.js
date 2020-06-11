import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Paper, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { usersInput } from "../../redux/actions";
import { PIN_LENGTH } from "../../redux/constants";
import { Animated } from "react-animated-css";

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
	inputContainer: {
		paddingTop: 40,
	},
}));

const Input = () => {
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

	const handleChange = (event) => {
		setInputValue(event.target.value);
	};

	return (
		<Grid
			container
			direction="column"
			justify="center"
			alignItems="center"
			className={classes.inputContainer}>
			<Grid item>
				<form noValidate autoComplete="off" spacing={2}>
					<Animated
						animationIn="bounceInLeft"
						animationOut="fadeOut"
						isVisible={true}>
						<div
							className={inputValue.length >= PIN_LENGTH && !inputs && "anim"}>
							<TextField
								error={inputValue !== "" && !isValid}
								id="outlined-error-helper-text"
								label="your pin"
								type="password"
								inputProps={{
									maxLength: PIN_LENGTH,
								}}
								value={inputValue}
								helperText={
									inputValue !== "" && !isValid
										? "Only numbers required."
										: inputValue.length >= PIN_LENGTH && !inputs
										? "Wrong pin code. Try again."
										: ""
								}
								variant="outlined"
								onChange={handleChange}
							/>
						</div>
					</Animated>
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
export default Input;
