// Calling function to perform auto complete
autocomplete(document.getElementById('searchInput'), stockName)
//APPLE stock data fetch on load
$(window).load(function () {
    $.ajax({
        url: "tsData/",
        type: "GET",
        data: {
            interval: "5min",
            outputsize: "78",
            symbol: "AAPL"
        },
        success: function (response) {
            drawGraph(response.xLabel, response.yLabel, "1 DAY")
            setMovingAverageData(response)
            setStockSummaryData(response)
        },
        error: function () {
            console.log("Error occured!!!")
        }

    })
});

// Ajax request to fetch data
$(".graphChangeBtn").click(function () {
    var displayName = $(this).attr("data-display")

    $.ajax({
        url: "tsData/",
        type: "GET",
        data: {
            interval: $(this).attr("data-interval"),
            outputsize: $(this).attr("data-outputsize"),
            symbol: $(this).attr("data-stock"),
        },
        success: function (response) {
            drawGraph(response.xLabel, response.yLabel, displayName)
            setMovingAverageData(response)
            setStockSummaryData(response)
        },
        error: function () {
            console.log("Error occured!!!")
        }

    })
});

// Function to draw graph using TIME SERIES data
function drawGraph(xValues, yValues, displayName) {
    const canvas = document.getElementById("chartCanvas")
    canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
    canvas.getContext('2d').clearRect(0, 0, canvas.height, canvas.width)

    config = {
        type: "line",
        data: {
            labels: xValues,
            datasets: [{
                label: displayName,
                fill: true,
                lineTension: 0,
                backgroundColor: "rgba(48, 42, 42,1.0)",
                borderColor: "red",
                data: yValues
            }]
        },
        options: {
            plugins: {
                legend: {
                    display: true,
                },
            },
            scales: {
                xAxes: [{
                    gridLines: {
                        drawOnChartArea: false,
                        color: 'white',
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Time'
                    }
                }],
                yAxes: [{
                    gridLines: {
                        ticks: {
                            beginAtZero: true,
                        },
                        drawOnChartArea: false,
                        color: 'white',
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Stock Name'
                    }
                }],

            }
        }
    }

    new Chart("chartCanvas", config);
}

// Function to set moving average data
function setMovingAverageData(response) {
    $("#30ma").html(response.sma30)
    $("#50ma").html(response.sma50)
    $("#150ma").html(response.sma150)
    $("#200ma").html(response.sma200)
}

// function to set Stock SummaryData
function setStockSummaryData(response) {
    $("#stockNameSummary").html(response.stockName)
    $("#stockSymbolSummary").html(response.stockSymbol)
    // $("#stockIndustrySummary").html(response.stockIndustry)
    $("#stockExchangeSummary").html(response.stockExchange)
}

//jQuery to make searchbar working
$("#searchSubmit").click(function () {
    event.preventDefault();
    $.ajax({
        url: "tsData/",
        type: "GET",
        data: {
            interval: "5min",
            outputsize: "78",
            symbol: $("#searchInput").val(),
        },
        success: function (response) {
            drawGraph(response.xLabel, response.yLabel)
            setMovingAverageData(response)
            setStockSummaryData(response)
            $(".graphChangeBtn").attr('data-stock', $("#searchInput").val())
        },
        error: function () {
            alert("Enter valid stock ticker!!!")
        }

    })

})

// function to chnage data-stock attribute of buttons
function chnageDataStockAttr(ticker) {
    $(".graphChangeBtn").attr('data-stock', 'smit')
    console.log("retriving : ", $("#test").attr("data-stock"))
}

// jQuery to make button highlight
$(".graphChangeBtn").click(function () {
    $(".graphChangeBtn").removeClass('active-graph-button')
    $(this).addClass("active-graph-button")
})