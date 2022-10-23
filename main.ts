import {Serie}   from "./serie.js";
import { seriesArray } from "./data.js";
let seriesTableBody : HTMLElement = document.getElementById("table")!;
let promedio : HTMLElement = document.getElementById("promedio")!;

tablaSeries(seriesArray);
promedio.innerHTML =calcularPromTemp(seriesArray).toString();

function tablaSeries(series : Serie[]) : void {
    series.forEach((serie) => {
        console.log(serie);
        let trElement: HTMLElement = document.createElement("tr");
        trElement.innerHTML =  `<td>${serie.id}</td>
                                <td>${serie.nombreSerie}</td>
                                <td>${serie.nombreCanal}</td>
                                <td>${serie.numeroTemporadas}</td>`;
        seriesTableBody.appendChild(trElement);
    })
}

function calcularPromTemp(series: Serie[]) : number {
    let total: number = 0;
    series.forEach((serie) => {
        total += serie.numeroTemporadas;
    });
    let promedio : number = total / (series.length);
    return promedio;
}