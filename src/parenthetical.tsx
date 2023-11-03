import type {ComponentProps} from 'react';

import classNames from './class-names';
import concat from './concat';

import './parenthetical.css';

const Element = 'span' as const;

type CharacterNameProps = ComponentProps<typeof Element>;

function Parenthetical({children, className, ...props}: CharacterNameProps): JSX.Element {
	return <Element {...props} className={concat(classNames.parenthetical, className)}>{children}</Element>;
}

Parenthetical.className = classNames.parenthetical;

function isParenthetical(text: string) {
	return text.startsWith('(') && text.endsWith(')');
}

Parenthetical.isParenthetical = isParenthetical;

export default Parenthetical;
