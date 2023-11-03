import isUpperCased from './is-upper-cased';

const characterDialogueSeparator = '___' as const;

function joinCharacterAndDialogue(
	currentLine: string | undefined,
	index: number,
	elements: Array<string | undefined>,
) {
	if (!currentLine) {
		return '';
	}

	if (isUpperCased(currentLine)) {
		const nextLine = elements[index + 1]?.trim();

		if (nextLine?.startsWith('(') && nextLine?.endsWith(')')) {
			const dialogueAfterParens = elements[index + 2];

			if (dialogueAfterParens) {
				elements[index + 2] = '';

				return [currentLine, nextLine, dialogueAfterParens].join(
					characterDialogueSeparator,
				);
			}
		}

		elements[index + 1] = '';
		return [currentLine, nextLine].join(characterDialogueSeparator);
	}

	return currentLine;
}

export default joinCharacterAndDialogue;
