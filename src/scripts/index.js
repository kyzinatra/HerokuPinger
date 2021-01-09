const https = require("http");

const options = {
	hostname: "dishesbook.herokuapp.com",
	port: 80,
	path: "/home",
	method: "get",
	headers: {
		"Content-Type": "application/x-www-form-urlencoded",
	},
};
const req = https.request(options, (res) => {
	console.log(`STATUS: ${res.statusCode}`);
	console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
	res.setEncoding("utf8");
	res.on("data", (chunk) => {
		console.log(`BODY: ${chunk}`);
	});
	res.on("end", () => {
		console.log(`${res.statusCode} - No more data in response.`);
	});
});

req.on("error", (e) => {
	console.log(`problem with request: ${e.message}`);
});

req.end();
