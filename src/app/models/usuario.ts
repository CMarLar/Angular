export class Usuario
{
    //Modo abreviado de clase cuando el constructor tiene como parámetros todos los atributos
    constructor(
        public id_usuario: number,
        public nombre: string,
        public apellidos: string,
        public correo: string,
        public password: string,
        public url: string){}

        //tipo de retorno tiene que ser void:
    public modifyUser(nombre:string,apellidos:string,
                correo:string,url:string): void
    {
        this.nombre=nombre;
        this.apellidos=apellidos;
        this.correo=correo;
        this.url=url
    }
}

