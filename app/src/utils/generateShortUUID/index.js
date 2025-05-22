export default () => {
	const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
	const length = 8;
	let uuid = "";

	for (let i = 0; i < length; i++) {
		const randomIndex = Math.floor(Math.random() * characters.length);
		uuid += characters[randomIndex];
	}

	return uuid;
};
