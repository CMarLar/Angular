export class Libro {
    constructor(
        public titulo: string,
        public tipoLibro: string,
        public autor: string,
        public precio: number,
        public photo: string,
        public id_libro: number = 0,//valor 0 por defecto. Los parámetros por defecto se ponen al final
        public id_usuario: number = 0,
    ){}
}
