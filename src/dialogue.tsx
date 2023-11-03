import {Fragment, type ComponentProps} from 'react';

import CharacterName from './character-name';
import classNames from './class-names';
import concat from './concat';
import Slugline from './slugline';

import './dialogue.css';
import Parenthetical from './parenthetical';

const Element = 'div' as const;

type DialogueProps = ComponentProps<typeof Element>;

function Dialogue({children, className, ...props}: DialogueProps): JSX.Element {
	return (
		<Fragment>
			<Element {...props} className={concat(classNames.dialogue, className)}>
				<span className={classNames.dialogueLine}>
					{children}
				</span>
			</Element>
			<br />
		</Fragment>
	);
}

Dialogue.className = classNames.dialogue;

function isDialogue(text: string, previousLine?: string): boolean {
	return text.length > 0
  && typeof previousLine === 'string'
  && !Slugline.isSlugline(previousLine)
  && (CharacterName.isCharacterName(previousLine) || Parenthetical.isParenthetical(previousLine));
}

Dialogue.isDialogue = isDialogue;

export default Dialogue;
