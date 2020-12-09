


class Renderer {
    constructor(){

    }

    async chartIt(stockSymbol, closePrices){
        const ctx = document.getElementById("myChart").getContext("2d");
        const myChart = await new Chart(ctx, {
            type: "line",
            data: {
                labels: model.stockData.dates,
                datasets: [
                    {
                        label: stockSymbol,
                        data: model.stockData.closePricesHistory,
                        backgroundColor: "rgba(255, 99, 132, 0.2)",
                        borderColor: "rgba(255, 99, 132, 1)",
                        borderWidth: 1,
                        data: closePrices
                    },
                ],
            },
            options: {
                responsive: true,
                title: {
                    display: true,
                    text: "Toam & Idan-Stock",
                    fontSize: 20,
                    fontFamily: "sans-serif",
                },
                legend: {
                    display: true,
                },
                scales: {
                    responsive: true,
                    xAxes: [
                        {
                            gridLines: {},
                            ticks: {
                                // maxTicksLimit: 6,
                                maxRotation: 0,
                                minRotation: 0,
                            },
                        },
                    ],
                    yAxes: [
                        {
                            ticks: {
                                maxTicksLimit: 100,
                                beginAtZero: true,
                                autoSkip: true,
                                // suggestedMax:1
                                // maxRotation: 0,
                                // minRotation: 0,
                            },
                        },
                    ],
                },
            },
        });
    }
}