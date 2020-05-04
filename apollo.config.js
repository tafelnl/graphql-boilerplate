module.exports = {
	client: {
		service: process.env.APOLLO_SERVICE_NAME || 'graphql_boilerplate',
		endpoint: 'http://localhost:4000/api',
	},
};
