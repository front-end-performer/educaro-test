import { createMuiTheme } from "@material-ui/core/styles";

const ligthGreen = "#2dc807";
const lightBlue = "#41b6e6";

export default createMuiTheme({
	palette: {
		primary: {
			main: `${ligthGreen}`,
		},
		secondary: {
			main: `${lightBlue}`,
		},
	},
});
