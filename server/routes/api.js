const express = require("express");
const router = express.Router();
const yahooFinance = require("yahoo-finance");

router.get("/history/:stockSymbol/:fromDate/:toDate", async function (req, res) {
	const {stockSymbol} = req.params
	const {fromDate} = req.params
	const {toDate} = req.params
	try {
		await yahooFinance.historical(
			{
				symbol: stockSymbol,
				from: fromDate,
				to: toDate,
				// period: 'd'  // 'd' (daily), 'w' (weekly), 'm' (monthly), 'v' (dividends only)
			},
			function (err, response) {
			const releventData = response.map(r => {return{date:r.date, close:r.close}})
				res.status(200).json(releventData)
				
			}
		);
	} catch (err) {
		res.status(404).json(err);
	}
});

module.exports = router;
