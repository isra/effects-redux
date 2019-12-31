import { Action } from "@ngrx/store";
import { UsuarioModel } from "../../models/usuario.model";

export const USUARIOS_REQUEST = "[Usuarios] Usuarios Loading";
export const USUARIOS_SUCCESS = "[Usuarios] Usuarios Success";
export const USUARIOS_FAIL = "[Usuarios] Usuarios Fail";

export class UsuariosRequest implements Action {
  readonly type = USUARIOS_REQUEST;
}

export class UsuariosSuccess implements Action {
  readonly type = USUARIOS_SUCCESS;

  constructor(public usuarios: UsuarioModel[]) {}
}

export class UsuariosFail implements Action {
  readonly type = USUARIOS_FAIL;
  constructor(public payload: any) {}
}

export type actions = UsuariosRequest | UsuariosSuccess | UsuariosFail;
