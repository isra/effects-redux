import { Action } from "@ngrx/store";
import { UsuarioModel } from "../../models/usuario.model";

export const USUARIO_REQUEST = "[Usuario] Usuario Loading";
export const USUARIO_SUCCESS = "[Usuario] Usuario Success";
export const USUARIO_FAIL = "[Usuario] Usuario Fail";

export class UsuarioRequest implements Action {
  readonly type = USUARIO_REQUEST;
  constructor(public id: number) {}
}

export class UsuarioSuccess implements Action {
  readonly type = USUARIO_SUCCESS;

  constructor(public usuario: UsuarioModel) {}
}

export class UsuarioFail implements Action {
  readonly type = USUARIO_FAIL;
  constructor(public payload: any) {}
}

export type usuarioActions = UsuarioRequest | UsuarioSuccess | UsuarioFail;
