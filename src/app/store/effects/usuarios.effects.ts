import { Injectable } from "@angular/core";
import { Actions, ofType, createEffect } from "@ngrx/effects";
import { of } from "rxjs";
import { map, switchMap, catchError } from "rxjs/operators";

import * as fromUsuariosAction from "../actions/usuarios.actions";
import { UsuariosService } from "../../services/usuarios.service";

@Injectable()
export class UsuariosEffects {
  constructor(
    private actions$: Actions,
    private usuariosService: UsuariosService
  ) {}

  usuariosRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromUsuariosAction.USUARIOS_REQUEST),
      switchMap(() =>
        this.usuariosService.getUsers().pipe(
          map(usuarios => new fromUsuariosAction.UsuariosSuccess(usuarios)),
          catchError(err => of(new fromUsuariosAction.UsuariosFail(err)))
        )
      )
    )
  );
}
