export class Correctivo {
    constructor(
        public idMantCorrect: string,
        public idMaquina: string,
        public fechaSolicitud: Date,
        public solicitante: string,
        public fechaReparacion: Date,
        public mantRealizar: string,
        public fechaRealizacion: Date,
        public realizadoPor: string,
        public fechaReparado: Date,
        public horaReparado: Date,
        public mantRealizado: string
    ) { }
}
