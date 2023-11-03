import {type ComponentProps} from 'react';

import UsLetterPaper from './us-letter-paper';

type ScreenplayProps = Omit<ComponentProps<'div'>, 'children'> & {
	children: string;
};

function Screenplay({children, className, ...props}: ScreenplayProps): JSX.Element {
	if (typeof children !== 'string') {
		throw new Error('<Screenplay /> children are not type of "string."');
	}

	return (
		<UsLetterPaper {...props} raw={children} className={className} />
	);
}

export default Screenplay;
