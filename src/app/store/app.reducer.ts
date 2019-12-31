import { ActionReducerMap } from "@ngrx/store";

import * as reducers from "./reducers";

export interface IAppState {
  usuarios: reducers.IUsuariosState;
  usuario: reducers.IUsuarioState;
}

export const AppReducers: ActionReducerMap<IAppState> = {
  usuarios: reducers.usuariosReducer,
  usuario: reducers.usuarioReducer
};
