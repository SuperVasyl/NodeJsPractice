import chalk from 'chalk';
import dedent from 'dedent-js';

const printError = (error) => {
	console.log(chalk.bgRed(' ERROR ') + ' ' + error);
};

const printSuccess = (message) => {
	console.log(chalk.bgGreen(' SUCCESS ') + ' ' + message);
};

const printHelp = () => {
	console.log(
		dedent`${chalk.bgCyan(' HEPL ')}
		Without parameters - print weather
		-s [CITY] for instzlling the city
		-h for help keywords
		-t [API_KEY] for saving token
		`
	);
};

export { printError, printSuccess, printHelp };