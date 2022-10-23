export class Serie {
    
    id : number;
    nombreSerie: string;
    nombreCanal: string;
    numeroTemporadas: number;
    descripcion: string;
    link: string;
    imagen: string;
  
    constructor(id:number ,nombreSerie:string,nombreCanal: string,numeroTemporadas:number ,descripcion: string, link: string, imagen: string) {
      this.id = id;  
      this.nombreSerie = nombreSerie;
      this.nombreCanal = nombreCanal;
      this.numeroTemporadas = numeroTemporadas;
      this.descripcion= descripcion;
      this.link = link;
      this.imagen = imagen; 
    }
}

