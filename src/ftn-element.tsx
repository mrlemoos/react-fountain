import {type HTMLAttributes} from 'react';

import ActionLine from './action-line';
import CharacterName from './character-name';
import Dialogue from './dialogue';
import Parenthetical from './parenthetical';
import Slugline from './slugline';
import Transition from './transition';

type FtnElementProps = {
	textAbove?: string;
} & HTMLAttributes<HTMLElement>;

function FtnElement({children: text, textAbove}: FtnElementProps): JSX.Element | undefined {
	if (typeof text !== 'string') {
		return undefined;
	}

	if (Slugline.isSlugline(text)) {
		return <Slugline>{text}</Slugline>;
	}

	if (Transition.isTransition(text)) {
		return <Transition>{text}</Transition>;
	}

	if (CharacterName.isCharacterName(text)) {
		return <CharacterName>{text}</CharacterName>;
	}

	if (Parenthetical.isParenthetical(text)) {
		return <Parenthetical>{text}</Parenthetical>;
	}

	if (Dialogue.isDialogue(text, textAbove)) {
		return <Dialogue>{text}</Dialogue>;
	}

	console.log(`ACTION "${text}"`);
	return <ActionLine>{text}</ActionLine>;
}

export default FtnElement;
