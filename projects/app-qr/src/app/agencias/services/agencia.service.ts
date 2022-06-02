import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Agency } from '../models/agencia.models';

@Injectable({
    providedIn: 'root',
})
export class AgenciaService {
    url = '/api/agencias/';

    constructor(private http: HttpClient) {}

    loadAgencias(): Observable<any> {
        return this.http.get(this.url);
    }

    loadAgency(id: string): Observable<any> {
        return this.http.get(this.url + id);
    }

    addAgency(agency: Agency) {
        return this.http.post(this.url, agency);
    }

    updateAgency(id: string, agency: Agency) {
        return this.http.put(this.url + id, agency);
    }

    deleteAgency(id: string) {
        return this.http.delete(this.url + id);
    }
}
