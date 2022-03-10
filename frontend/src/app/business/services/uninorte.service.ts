import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Aplicacion, Parametro } from "../models/uninorte";
import { Crud } from "./common";

/**
 * Servicio para consumir la API de las Aplicaciones
 */
@Injectable({
    providedIn: 'root'
})
export class AplicacionService extends Crud<Aplicacion> {
    constructor(protected http: HttpClient) {
        super(http, 'api/apps');
    }
}

/**
 * Servicio para consumir la API de las Parametros
 */
@Injectable({
    providedIn: 'root'
})
export class ParametroService extends Crud<Parametro> {
    constructor(protected http: HttpClient) {
        super(http, 'api/pars');
    }
}