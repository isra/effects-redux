import { IUsuario } from "../interfaces/usuario";

export class UsuarioModel {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;

  constructor(usuario: IUsuario) {
    this.id = (usuario && usuario.id) || null;
    this.email = (usuario && usuario.email) || null;
    this.first_name = (usuario && usuario.first_name) || null;
    this.last_name = (usuario && usuario.last_name) || null;
    this.avatar = (usuario && usuario.avatar) || null;
  }
}
