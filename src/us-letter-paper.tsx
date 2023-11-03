import {Fragment, useMemo, type ComponentProps} from 'react';

import classNames from './class-names';
import concat from './concat';
import extractMarkup from './extract-markup';
import FtnElement from './ftn-element';

import './us-letter-paper.css';

type UsLetterPaperProps = ComponentProps<'div'> & {
	children?: never;
	raw: string;
};

function UsLetterPaper({raw, className, ...props}: UsLetterPaperProps): JSX.Element {
	const screenplayLines = useMemo(
		() => extractMarkup(String(raw)).split('\n').filter(Boolean),
		[raw],
	);

	return (
		<div {...props} className={concat(classNames.usLetterPaper, className)}>
			{screenplayLines.map((text, index, arr) => {
				const previousLine = arr[index - 1];
				const key = `${text}-${previousLine}`;

				return (
					<Fragment key={key}>
						<FtnElement textAbove={previousLine}>{text}</FtnElement>
						<br />
					</Fragment>
				);
			})}
		</div>
	);
}

export default UsLetterPaper;
