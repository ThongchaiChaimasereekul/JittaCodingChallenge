function maxProfitTheFirst(transaction, transLen) {
    document.write('-----First Function-----<br>')

    if (transLen == 1) {
        return;
    }

    let highestProfit = transaction[1].closePrice - transaction[0].closePrice;
    let buyingPrice = transaction[0].closePrice;
    let sellingPrice;
    let buyingDate, sellingDate;
    let i;

    for (i = 1; i < transLen; i++) {
        if (transaction[i].closePrice - buyingPrice > highestProfit) {
            highestProfit = transaction[i].closePrice - buyingPrice;
            sellingDate = transaction[i].date;
            sellingPrice = transaction[i].closePrice;

        }
        if (transaction[i].closePrice < buyingPrice) {
            buyingPrice = transaction[i].closePrice;
            buyingDate = transaction[i].date;
        }
    }
    // console.log(buyingDate + ':' + buyingPrice);
    // console.log(sellingDate + ':' + sellingPrice);
    // console.log(highestProfit);
    let ans = document.write(
        'ซื้อขายได้อย่างละครั้ง: ' +
        'ซื้อที่วันที่: ' + buyingDate + '\n' +
        'และขายวันที่: ' + sellingDate + '\n' +
        'ได้กำไร ' + sellingPrice + ' - ' + buyingPrice + ' = ' + highestProfit
    )
    return ans;
}

function maxProfitTheSecond(transaction, transLen) {
    document.write('<br><br>-----Second Function-----<br>')

    if (transLen == 1) {
        return;
    }

    let highestProfit = Number.MIN_VALUE;

    let i = 0;
    while (i < transLen - 1) {
        while ((i < transLen - 1) && (transaction[i + 1].closePrice <= transaction[i].closePrice)) {
            i++;
        }
        if (i == transLen - 1) {
            break;
        }

        let buyingDate = i++;
        // console.log('Buying Date:' + transaction[buyingDate].date);
        // console.log('Buying Price:' + transaction[buyingDate].closePrice);

        while ((i < transLen) && (transaction[i].closePrice >= transaction[i - 1].closePrice)) {
            i++;
        }

        let sellingDate = i - 1;
        // console.log('Selling Date:' + transaction[sellingDate].date);
        // console.log('Selling Price:' + transaction[sellingDate].closePrice);
        if (highestProfit < 0) highestProfit = transaction[sellingDate].closePrice - transaction[buyingDate].closePrice;
        else highestProfit += transaction[sellingDate].closePrice - transaction[buyingDate].closePrice;

        document.write(
            'ซื้อวันที่ ' + transaction[buyingDate].date + ' ขายวันที่ ' + transaction[sellingDate].date +
            ' ได้กำไร' + transaction[sellingDate].closePrice + ' - ' + transaction[buyingDate].closePrice +
            ' = ' + (transaction[sellingDate].closePrice - transaction[buyingDate].closePrice) +
            '<br>'
        );
    }

    document.write(
        'ซื้อขายกี่ครั้งก็ได้: กำไรรวม ' + highestProfit + '<br>'
    );

}

const transaction = [
    {
        date: '2021-01-01',
        closePrice: 11,
    },
    {
        date: '2021-01-02',
        closePrice: 9,
    },
    {
        date: '2021-01-03',
        closePrice: 11,
    },
    {
        date: '2021-01-04',
        closePrice: 15,
    },
    {
        date: '2021-01-05',
        closePrice: 10,
    },
    {
        date: '2021-01-06',
        closePrice: 12,
    },
    {
        date: '2021-01-07',
        closePrice: 14,
    },
    {
        date: '2021-01-08',
        closePrice: 16,
    }
];

const length = transaction.length;

maxProfitTheFirst(transaction, length);
maxProfitTheSecond(transaction, length);