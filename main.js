"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_js_1 = require("./data.js");
let seriesTableBody = document.getElementById("table");
let promedio = document.getElementById("promedio");
tablaSeries(data_js_1.seriesArray);
promedio.innerHTML = calcularPromTemp(data_js_1.seriesArray).toString();
function tablaSeries(series) {
    series.forEach((serie) => {
        console.log(serie);
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<td>${serie.id}</td>
                                <td>${serie.nombreSerie}</td>
                                <td>${serie.nombreCanal}</td>
                                <td>${serie.numeroTemporadas}</td>`;
        seriesTableBody.appendChild(trElement);
    });
}
function calcularPromTemp(series) {
    let total = 0;
    series.forEach((serie) => {
        total += serie.numeroTemporadas;
    });
    let promedio = total / (series.length);
    return promedio;
}
