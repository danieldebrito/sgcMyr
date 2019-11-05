export class MantCorrectivo {
    constructor(
        public idMantCorrectivo: string,
        public fechaSolicitud: string,
        public solicitante: string,
        public fechaEstimadaReparacion: string,
        public descMantARealizar: string,
        public fechaRealizado: string,
        public horaRealizado: string,
        public realizadoPor: string,
        public descMantARealizado: string
    ) { }
}
