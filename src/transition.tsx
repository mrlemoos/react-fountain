import type {ComponentProps} from 'react';

import classNames from './class-names';
import concat from './concat';

import './transition.css';

const Element = 'span' as const;

type TransitionProps = ComponentProps<typeof Element>;

function Transition({children, className, ...props}: TransitionProps): JSX.Element {
	return <Element {...props} className={concat(classNames.transition, className)}>{children}</Element>;
}

Transition.className = classNames.transition;

function isTransition(text: string): boolean {
	const trimmed = text.trim();

	return (
		trimmed.startsWith('>')
    || trimmed.endsWith(':')
    || ['FADE OUT.', 'FADE OUT', 'CUT TO BLACK.'].some(value => text === value)
	);
}

Transition.isTransition = isTransition;

export default Transition;
