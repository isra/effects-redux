import * as fromUsuarios from "../actions/usuarios.actions";
import { UsuarioModel } from "../../models/usuario.model";

export interface IUsuariosState {
  loading: boolean;
  loaded: boolean;
  items: UsuarioModel[];
  error: any;
}

const initialState: IUsuariosState = {
  loading: false,
  loaded: false,
  items: [],
  error: null
};

export function usuariosReducer(
  state: IUsuariosState = initialState,
  action: fromUsuarios.actions
): IUsuariosState {
  switch (action.type) {
    case fromUsuarios.USUARIOS_REQUEST:
      return {
        ...state,
        loading: true,
        error: false
      };
    case fromUsuarios.USUARIOS_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        items: action.usuarios.map(item => {
          return {
            ...item
          };
        })
      };
    case fromUsuarios.USUARIOS_FAIL:
      return {
        ...state,
        loaded: false,
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
