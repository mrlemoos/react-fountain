import type {ComponentProps} from 'react';

import classNames from './class-names';
import concat from './concat';

import './action-line.css';

const Element = 'p' as const;

type ActionLineProps = ComponentProps<typeof Element>;

function ActionLine({children, className, ...props}: ActionLineProps): JSX.Element {
	return <Element {...props} className={concat(classNames.actionLine, className)}>{children}</Element>;
}

ActionLine.className = classNames.actionLine;

export default ActionLine;
