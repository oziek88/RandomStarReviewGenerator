document.addEventListener("DOMContentLoaded", function () {
    CreateGraph();
});

function LoadGlassdoorData() {
    CreateGraph("8,2,0,0,1");
}

function CreateRandomData(length) {
    var data = [];
    for (let i = 0; i < length; i++) {
        data.push(Math.floor(Math.random() * 1001));
    }
    return data;
}

function CreateGraph(inputValues = "") {
    var g = '<g>',
        data = [],
        colors = ["#B5EAD7", "#E2F0CB", "#FFDAC1", "#FFB7B2", "#FF9AA2"];


    if (inputValues) {
        var values = inputValues.split(',').map((i) => parseInt(i));
        values = values.filter(function (v) { return !isNaN(v); });
        if (values.length > 5) {
            data = values.slice(0, 5);
        } else {
            data = values.concat(CreateRandomData(5 - values.length));
        }
    } else {
        data = CreateRandomData(5);
    }

    const maxValue = Math.max(...data);
    const graphMax = Math.ceil(maxValue / 10) * 10;
    
    const graphMid = graphMax / 2;
    const maxElement = document.getElementById("max-x");
    const midElement = document.getElementById("mid-x");

    maxElement.innerHTML = graphMax;
    midElement.innerHTML = graphMid;

    var rectY = 0;
    var textY = 25;
    for (let i = 0; i < 5; i++) {
        const rectWidth = data[i] / graphMax * 300;
        var bar = "<g class='bar'>";
        bar += `<rect x='50' y=${rectY.toString()} width=${rectWidth.toString()} height='39' fill=${colors[i]}></rect>`;
        bar += `<text class='bar-text' x='60' y=${textY.toString()}>${data[i]}</text>`;
        bar += "/g";
        g += bar;
        rectY += 40;
        textY += 40;
    }
    
    g += '</g>';
    document.getElementById('bars').innerHTML = g;
}