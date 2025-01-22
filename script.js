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

let partition = function (tab, first, last, pivot) {
    
}

let sortQuick = function (data) {
    let
}


let createChart = function () {
    let costsNaive = [];
    let costsBubble = [];
    let iLabels = [];

    for(let i = 0; i < 1010; i+=10){
        let data = createRandomArray(i, 10);

        let costNaive = sort(data);
        costsNaive.push(costNaive);
            
        let costBubble = sortBubble(data)
        costsBubble.push(costBubble);

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
            }
        ]
        }
    });
}

createChart();
