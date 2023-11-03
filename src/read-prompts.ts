import joinCharacterAndDialogue from './join-character-and-dialogue';

/**
 * The provided TypeScript code is part of a module that exports a function named readPrompts. This function is designed
 * to process an array of strings, which are referred to as lines within the function.
 *
 * The readPrompts function operates in several stages:
 *
 * First, it uses the map method to iterate over each string in the lines array. For each string, it performs two
 * replacement operations. The first operation replaces all instances of the single quote character (') with the right
 * single quotation mark (’). The second operation replaces all instances of the string \\n\\n with a single newline
 * character (\n). The use of optional chaining (?.) ensures that these operations are only performed if the current
 * string is not null or undefined.
 *
 * After the replacements, the function uses the filter method twice to remove any falsy values (like null, undefined,
 * or empty strings) and any strings that are equal to \\n.
 *
 * The remaining strings are then processed with another map function, which calls the joinCharacterAndDialogue function
 * on each string. This function is imported from another module and is likely used to format the strings in a specific
 * way. The exact details of this formatting would depend on the implementation of joinCharacterAndDialogue.
 *
 * Finally, the function uses filter one more time to remove any falsy values that may have been introduced by
 * {@link joinCharacterAndDialogue}.
 *
 * The result of these operations is a new array of strings, which is returned by the readPrompts function.
 *
 * As for potential improvements, the code could be made more readable by adding comments to explain the purpose of each
 * operation, especially the joinCharacterAndDialogue function. Additionally, the performance could potentially be
 * improved by combining the filtering operations into a single pass, although this would likely have a negligible
 * impact unless the lines array is very large.
 */
function readPrompts(lines: string[]): string[] {
	return lines.map(message =>
		/* Avoid double \n\n (sometimes it can be generated like that, but it is intermittent) */ message
			?.replace('\'', '’')
			?.replace(/\\n\\n/, '\n'),
	)
		.filter(Boolean)
		.filter(val => val !== '\\n')
		.map((val, index, curr) => joinCharacterAndDialogue(val, index, curr))
		.filter(Boolean);
}

export default readPrompts;
