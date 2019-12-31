import { Injectable } from "@angular/core";
import { Actions, ofType, createEffect } from "@ngrx/effects";
import { of } from "rxjs";
import { map, switchMap, catchError } from "rxjs/operators";

import * as fromUsuarioAction from "../actions/usuario.actions";
import { UsuariosService } from "../../services/usuarios.service";

@Injectable()
export class UsuarioEffects {
  constructor(
    private actions$: Actions,
    private usuariosService: UsuariosService
  ) {}

  usuarioRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromUsuarioAction.USUARIO_REQUEST),
      switchMap(action =>
        this.usuariosService.getUserById(action["id"]).pipe(
          map(usuario => new fromUsuarioAction.UsuarioSuccess(usuario)),
          catchError(err => of(new fromUsuarioAction.UsuarioFail(err)))
        )
      )
    )
  );
}
