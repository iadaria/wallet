export const is = {
	exist: (item: unknown) => Boolean(item),
	empty: (item: unknown) => {
		if (Array.isArray(item)) return !Boolean(item.length);
		return !Boolean(item);
	}
}