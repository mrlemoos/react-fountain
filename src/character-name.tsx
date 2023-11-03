import type {ComponentProps} from 'react';

import classNames from './class-names';
import concat from './concat';
import isUpperCased from './is-upper-cased';

import './character-name.css';

const Element = 'span' as const;

type CharacterNameProps = ComponentProps<typeof Element>;

function CharacterName({children, className, ...props}: CharacterNameProps): JSX.Element {
	return <Element {...props} className={concat(classNames.characterName, className)}>{children}</Element>;
}

CharacterName.className = classNames.characterName;

function isCharacterName(text: string): boolean {
	return isUpperCased(text) && !text.trim().startsWith('!');
}

CharacterName.isCharacterName = isCharacterName;

export default CharacterName;
