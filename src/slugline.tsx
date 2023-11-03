import type {ComponentProps} from 'react';

import classNames from './class-names';
import concat from './concat';

import './slugline.css';

const Element = 'span' as const;

type SluglineProps = ComponentProps<typeof Element>;

function Slugline({children, className, ...props}: SluglineProps): JSX.Element {
	return <Element {...props} className={concat(classNames.slugline, className)}>{children}</Element>;
}

Slugline.className = classNames.slugline;

function isSlugline(text: string): boolean {
	return ['I. ', 'E. ', 'INT. ', 'EXT. ', 'INTERIOR ', 'EXTERIOR ', '.'].some(prefix =>
		text.startsWith(prefix),
	);
}

Slugline.isSlugline = isSlugline;

export default Slugline;
