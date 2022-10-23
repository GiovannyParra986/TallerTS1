"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Serie = void 0;
class Serie {
    constructor(id, nombreSerie, nombreCanal, numeroTemporadas, descripcion, link, imagen) {
        this.id = id;
        this.nombreSerie = nombreSerie;
        this.nombreCanal = nombreCanal;
        this.numeroTemporadas = numeroTemporadas;
        this.descripcion = descripcion;
        this.link = link;
        this.imagen = imagen;
    }
}
exports.Serie = Serie;
