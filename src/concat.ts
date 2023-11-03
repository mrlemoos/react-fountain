/**
 * Function that filters falsy arguments and concatenates strings with a space between them.
 *
 * @example
 * ```ts
 *
 * const colorClasses = 'text-red-500 bg-red-200';
 * const textClasses = 'text-white text-2xl';
 *
 * const classes = concat(colorClasses, textClasses);
 * // => 'text-red-500 bg-red-200 text-white text-2xl'
 * ```
 */
function concat(...args: Array<string | undefined | boolean> | ReadonlyArray<string | undefined | boolean>): string {
	return args.filter(Boolean).join(' ');
}

export default concat;
