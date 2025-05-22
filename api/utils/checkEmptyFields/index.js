export default (data) => {
	if (typeof data !== 'object') throw new Error('data is not object');

	return Object.values(data)
		.some(item => item.trim().length === 0);
}
