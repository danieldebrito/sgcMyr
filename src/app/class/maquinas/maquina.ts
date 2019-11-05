export class Maquina {
    constructor(
        public idMaquina: string,           // 01
        public detalle: string,             // 02
        public marca: string,               // 03
        public sector: string,              // 04
        public estado: string,              // 05
        public urlImagen: string,           // 06
        public fabricanteNombre: string,    // 07
        public fabricanteDireccion: string, // 08
        public fabricanteTelefono: string,  // 09
        public fabricanteContacto: string   // 10
    ) { }
}
