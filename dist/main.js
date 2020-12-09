const model = new Model()
const render = new Renderer()

$("button").on("click", async () => {
    let stockSymbolInput = $("input").val()
    let fromDate = $("#fromDate").val()
    let toDate = $("#toDate").val()
    await model.getHistoryData(stockSymbolInput, fromDate, toDate)
    await render.chartIt(stockSymbolInput, model.stockData.closePricesHistory)
})