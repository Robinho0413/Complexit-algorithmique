let createRandomArray = function(size, max) {
    let data = [];

    for( let i = 0; i < size; i++ ){
        data.push(Math.round(Math.random() * max));
    }

    return data;
}

let sort = function (data) {
    let cost = 0;
    for (let i = 0; i < data.length-1; i++) {
        let imax = i; 
        for(let j = i+1; j < data.length; j++){
            cost++
            if ( data[imax] < data[j]) {
                imax = j;
            }
        }
        let max = data[imax];
        data.splice(imax, 1);
        data.unshift(max);
    }

    return cost;
}

let sortBubble = function (data) {
    let proceed = true;
    let cost = 0;

    while(proceed){
        proceed = false;
        for(let i = 0; i < data.length-1; i++){
            cost++;
            if(data[i] > data[i+1]){
                [data[i], data[i+1]] = [data[i+1], data[i]];
                proceed = true;
            } 
        }
    }

    return cost
}

let partition = function (tab, low, high) {
    let pivot = tab[high];
    let i = low - 1; // Index du plus grand élément trouvé

    for (let j = low; j < high; j++) {
        if (tab[j] < pivot) {
            i++;
            [tab[i], tab[j]] = [tab[j], tab[i]];
        }
    }

    [tab[i + 1], tab[high]] = [tab[high], tab[i + 1]];
    return i + 1;
};

let sortQuick = function (tab) {
    let stack = [];
    let cost = 0;

    stack.push(0);
    stack.push(tab.length - 1);

    while (stack.length > 0) {
        let high = stack.pop();
        let low = stack.pop();

        let pivotIndex = partition(tab, low, high);
        cost += high - low;

        // Si des éléments à gauche du pivot
        if (pivotIndex - 1 > low) {
            stack.push(low);
            stack.push(pivotIndex - 1);
        }

        // Si des éléments à droite du pivot
        if (pivotIndex + 1 < high) {
            stack.push(pivotIndex + 1);
            stack.push(high);
        }
    }

    return cost;
};



let createChart = function () {
    let costsNaive = [];
    let costsBubble = [];
    let costsQuick = [];
    let iLabels = [];

    for(let i = 0; i < 1010; i+=10){
        let data = createRandomArray(i, 10);

        let costNaive = sort(data);
        costsNaive.push(costNaive);
            
        let costBubble = sortBubble(data)
        costsBubble.push(costBubble);

        let costQuick = sortQuick(data);
        costsQuick.push(costQuick);

        iLabels.push(i);
    }

    const ctx = document.getElementById("chart");

    new Chart(ctx, {
        type: 'line',
        data : {
            labels: iLabels,
            datasets: [
            {
                label: 'Naive',
                data: costsNaive,
                fill: false,
                borderColor: 'rgb(255, 0, 0)',
                tension: 0.1
            },
            {
                label: 'Bubble',
                data: costsBubble,
                fill: false,
                borderColor: 'rgb(0, 255, 0)',
                tension: 0.1  
            }, {
                label: 'Quick Sort',
                data: costsQuick,
                fill: false,
                borderColor: 'rgb(0, 0, 255)',
                tension: 0.1
            }
        ]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

createChart();
