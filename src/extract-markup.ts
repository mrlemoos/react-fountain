const promptScreenplaySnippetAnnotations = [
	'%__SCREENPLAY_SNIPPET_BEGINNING__%',
	'%__SCREENPLAY_SNIPPET_END__%',
];

const [sliceBeginning, sliceEnd] = promptScreenplaySnippetAnnotations;

function extractMarkup(raw: string): string {
	const [, end] = raw.split(sliceBeginning);
	const [screenplay] = end.split(sliceEnd);

	return screenplay;
}

export default extractMarkup;
