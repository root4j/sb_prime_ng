/**
 * Auditoria
 */
export interface Auditoria {
    estado?: string;
    usuario?: string;
    fechaActividad?: Date;
}

/**
 * Interfaz para el modelo co.edu.uninorte.sb.template.entities.Aplicacion
 */
export interface Aplicacion extends Auditoria {
    id?: string;
    descripcion?: string;
    url?: string;
}

/**
 * Interfaz para el modelo co.edu.uninorte.sb.template.entities.Parametro
 */
export interface Parametro extends Auditoria {
    id?: string;
    app?: Aplicacion;
    tipo?: string;
    listado?: string;
    descripcion?: string;
    valor?: string;
}