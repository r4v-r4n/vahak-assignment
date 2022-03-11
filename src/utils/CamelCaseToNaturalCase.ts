import { regexThatTargetsAllUppercaseInString } from './regex';

export const CamelCaseToNaturalCase = (stringToConvert: string) =>
	stringToConvert.split(regexThatTargetsAllUppercaseInString).join(' ');
