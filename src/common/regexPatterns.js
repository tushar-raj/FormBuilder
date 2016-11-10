
const defaultPattern = '[A-Za-z0-9]{3,}';
const emailPattern = '[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$';
const alphaNumericPattern = '[A-Za-z0-9]';
const alphabetPattern = '[A-Za-z]';
const numericPattern = '[0-9]';
const datePatternInDDMMYYYY = '';

const patternObj = {
	defaultPattern: defaultPattern,
	email:emailPattern,
	alphaNumeric: alphaNumericPattern,
	alphabet: alphabetPattern,
	numeric: numericPattern,
	datePatterns:{
		ddmmyyyy: datePatternInDDMMYYYY
	}
}

export {patternObj as regexPatterns}
