import { Component, OnInit } from "@angular/core";

import { UsuariosService } from "../../services/usuarios.service";
import { IUsuario } from "../../interfaces/usuario";

@Component({
  selector: "app-lista",
  templateUrl: "./lista.component.html",
  styles: []
})
export class ListaComponent implements OnInit {
  usuarios: IUsuario[] = [];

  constructor(private usuariosService: UsuariosService) {}

  ngOnInit() {
    this.getUsers();
  }

  private getUsers() {
    this.usuariosService
      .getUsers()
      .subscribe(response => (this.usuarios = response as IUsuario[]));
  }
}
