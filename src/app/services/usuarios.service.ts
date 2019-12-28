import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";
import { IUsuario } from "../interfaces/usuario";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class UsuariosService {
  private url: string;

  constructor(private http: HttpClient) {
    this.url = "https://reqres.in/api";
  }

  getUsers(): Observable<IUsuario[]> {
    return this.http
      .get(`${this.url}/users?per_page=6`)
      .pipe(map(response => response["data"] as IUsuario[]));
  }
}
