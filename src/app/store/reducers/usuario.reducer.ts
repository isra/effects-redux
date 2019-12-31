import * as fromUsuario from "../actions/usuario.actions";
// import { UsuarioModel } from "../../models/usuario.model";
import { IUsuario } from "../../interfaces/usuario";

export interface IUsuarioState {
  loading: boolean;
  loaded: boolean;
  item: IUsuario;
  error: any;
}

const initialState: IUsuarioState = {
  loading: false,
  loaded: false,
  item: null,
  error: null
};

export function usuarioReducer(
  state: IUsuarioState = initialState,
  action: fromUsuario.usuarioActions
): IUsuarioState {
  switch (action.type) {
    case fromUsuario.USUARIO_REQUEST:
      return {
        ...state,
        item: null,
        loading: true,
        loaded: false,
        error: null
      };
    case fromUsuario.USUARIO_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        item: {
          ...action.usuario
        }
      };
    case fromUsuario.USUARIO_FAIL:
      return {
        ...state,
        loading: false,
        error: {
          message: action.payload.message,
          name: action.payload.name,
          url: action.payload.url,
          status: action.payload.status
        }
      };
    default:
      return state;
  }
}
