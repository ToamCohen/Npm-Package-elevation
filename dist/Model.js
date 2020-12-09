class Model {
	constructor() {
		this.stockData = {
			closePricesHistory: [],
			dates: [],
		};
	}

	async getHistoryData(stockSymbol, fromDate, toDate) {
		let history = await $.get(`/history/${stockSymbol}/${fromDate}/${toDate}`);
		for (let i in history) {
			this.stockData.closePricesHistory.unshift(history[i].close);
			this.stockData.dates.unshift(history[i].date);
		}
		return this.stockData;
	}
}