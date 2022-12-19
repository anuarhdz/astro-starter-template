type randomId = () => string;

const getRandomId: randomId = () => Math.random().toString(16).slice(2);

export default getRandomId;
