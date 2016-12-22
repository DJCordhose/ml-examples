function drawHits(svg, biasLevel, varLevel, test) {
    var color = test ? '#888888' : 'black';
    var clazz = test ? 'test' : 'training';

    var w = 200;
    var biasAngle = Math.random() * Math.PI * 2;
    var biasDist = w / 2 * biasLevel;

    var n = 25;
    var locs = [];
    for (var i = 0; i < n; i++) {
        var varAngle = Math.random() * Math.PI * 2;
        var varDist = w / 2 * varLevel * Math.random();
        locs.push([Math.cos(biasAngle) * biasDist + Math.cos(varAngle) * varDist + w / 2, Math.sin(biasAngle) * biasDist + Math.sin(varAngle) * varDist + w / 2]);
    }

    svg.selectAll("." + clazz).data(locs).enter().append("circle").attr("class", clazz).attr("cx", function (d) {
        return d[0];
    }).attr("cy", function (d) {
        return d[1];
    }).attr("r", 3);
    // .style("fill", function () {
    //     return color;
    // });
}

function drawBoard(id) {
    var w = 200;
    var svg = d3.select(id).append("svg").attr("width", w).attr("height", w).style("border", "none");
    var circles = [w / 2.2, w / 3.2, w / 5.5, w / 15];
    svg.selectAll(".ring").data(circles).enter().append("circle").attr("class", "ring").attr("cx", w / 2).attr("cy", w / 2).attr("r", function (d) {
        return d;
    }).style("fill", function (d, i) {
        // return i == 3 ? "#C12F3E" : (i == 1 ? "#76B3D8" : "white");
        if (i === 1 || i === 3) return "white";
        return "#DDDDDD";
        // return i == 3 ? "#CCCCCC" : (i == 1 ? "#CCCCCC" : "#CCCCCC");
    });
    return svg;

}

function drawScatter(id, biasLevel, varLevel, test) {
    var svg = drawBoard(id);
    drawHits(svg, biasLevel, varLevel, test);
}