export class Preventivo {
    constructor(
        public idMantCorrect: string,
        public idMaquina: string,
        public fechaSolicitud: string,
        public solicitante: string,
        public fechaReparacion: string,
        public mantRealizar: string,
        public defechaRealizaciontalle: string,
        public realizadoPor: string,
        public fechaReparado: string,
        public horaReparado: string,
        public mantRealizado: string
    ) { }
}
