import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

/**
 * Clase con operaciones basicas de CRUD.
 */
export class Crud<T> {
    protected readonly apiUrl = `${this.baseUrl}${this.uriComplement}`;
    constructor(
        protected readonly http: HttpClient,
        protected readonly uriComplement: string,
        protected readonly baseUrl: string = 'http://localhost:8080/'
    ) { }

    create(body: T): Observable<T> {
        return this.http.post<T>(this.apiUrl, body);
    }

    delete(id: any): Observable<T> {
        const url = this.entityUrl(id);
        return this.http.delete<T>(url);
    }

    read(id: any): Observable<T> {
        const url = this.entityUrl(id);
        return this.http.get<T>(url);
    }

    readAll(): Observable<T[]> {
        return this.http.get<T[]>(this.apiUrl);
    }

    update(id: any, body: T): Observable<T> {
        const url = this.entityUrl(id);
        return this.http.put<T>(url, body);
    }

    protected entityUrl(id: any): string {
        return [this.apiUrl, id].join('/');
    }
}