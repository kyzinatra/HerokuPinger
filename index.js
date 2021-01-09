const https = require("http");

const options = {
	hostname: process.argv[3] || "dishesbook.herokuapp.com",
	port: 80,
	path: "/home",
	method: "get",
	headers: {
		"Content-Type": "application/x-www-form-urlencoded",
	},
};

function ping() {
	const req = https.request(options, (res) => {
		res.setEncoding("utf8");
		res.on("data", (chunk) => {});
		res.on("end", () => {
			console.log(
				`stauts: ${res.statusCode} 
				\nComplete: ${res.complete}
				\nDate: ${new Date().toLocaleTimeString()} ${new Date().toLocaleDateString()} \n\n\n`
			);
		});
	});

	req.on("error", (e) => {
		console.log(
			`ERROR: ${e.message} \n\n
			Date: ${new Date().toLocaleTimeString()}  ${new Date().toLocaleDateString()}
			\nStart ping() again...`
		);
		ping();
	});

	req.end();
}
switch (String(process.argv[2])) {
	case "0":
		ping();
		break;
	default:
		setInterval(ping, process.argv[4] || 1500000);
		break;
}
