document.addEventListener('DOMContentLoaded', () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    function prepareReportData(cartItems) {
        const reportData = [];
        cartItems.forEach(item => {
            reportData.push({
                "Піца": item.name,
                "Розмір": item.size,
                "Кількість": item.quantity,
                "Ціна": item.price * item.quantity
            });
        });
        return reportData;
    }

    // Відображення звіту
    new WebDataRocks({
        container: "#table",
        toolbar: true,
        report: {
            dataSource: {
                data: prepareReportData(cart)
            },
            slice: {
                rows: [{
                    uniqueName: "Піца"
                }],
                columns: [{
                    uniqueName: "Розмір"
                }],
                measures: [{
                    uniqueName: "Кількість",
                    aggregation: "sum"
                }]
            }
        }
    });

    function drawChart(cartItems) {
        const pizzaCounts = {};
        cartItems.forEach(item => {
            pizzaCounts[item.name] = (pizzaCounts[item.name] || 0) + item.quantity;
        });

        const chartData = [];
        for (const pizza in pizzaCounts) {
            chartData.push({
                name: pizza,
                y: pizzaCounts[pizza]
            });
        }

        Highcharts.chart('pizzaChart', {
            chart: {
                type: 'pie'
            },
            title: {
                text: 'Замовлення'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                    }
                }
            },
            series: [{
                name: 'Кількість',
                data: chartData
            }]
        });
    }

    drawChart(cart);
});
