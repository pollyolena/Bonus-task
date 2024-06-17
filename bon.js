document.addEventListener("DOMContentLoaded", function() {
    var pivot = new WebDataRocks({
        container: "#pivot-container",
        toolbar: true, // панель інстр
        report: {
            dataSource: {
                data: getPizzaData()
            },
            slice: {
                rows: [
                    { uniqueName: "Category" },
                    { uniqueName: "Name" }
                ],
                columns: [
                    { uniqueName: "Measures" }
                ],
                measures: [
                    {
                        uniqueName: "Price",
                        aggregation: "sum",
                        format: "currency"
                    },
                    {
                        uniqueName: "Quantity",
                        aggregation: "sum"
                    }
                ]
            },
            formats: [
                {
                    name: "currency",
                    decimalPlaces: 2,
                    currencySymbol: "₴",
                    currencySymbolAlign: "left"
                }
            ]
        }
    });

    function getPizzaData() {
        return [
            { "Category": "М'ясні", "Name": "Імпреза", "Price": 99, "Quantity": 1 },
            { "Category": "М'ясні", "Name": "Імпреза", "Price": 169, "Quantity": 1 },
            { "Category": "М'ясні", "Name": "BBQ", "Price": 139, "Quantity": 1 },
            { "Category": "М'ясні", "Name": "BBQ", "Price": 199, "Quantity": 1 },
            { "Category": "М'ясні", "Name": "Міксовий поло", "Price": 115, "Quantity": 1 },
            { "Category": "М'ясні", "Name": "Міксовий поло", "Price": 179, "Quantity": 1 },
            { "Category": "Морські", "Name": "Дольче Маре", "Price": 399, "Quantity": 1 },
            { "Category": "Морські", "Name": "Россо Густо", "Price": 189, "Quantity": 1 },
            { "Category": "Морські", "Name": "Россо Густо", "Price": 299, "Quantity": 1 }
        ];
    }
});
