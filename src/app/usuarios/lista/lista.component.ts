import { Component, OnInit, OnDestroy } from "@angular/core";
import { Store } from "@ngrx/store";

import { IUsuario } from "../../interfaces/usuario";
import { IAppState } from "../../store/app.reducer";
import * as fromUsuariosAction from "../../store/actions/usuarios.actions";

import { Subscription } from "rxjs";

@Component({
  selector: "app-lista",
  templateUrl: "./lista.component.html",
  styles: []
})
export class ListaComponent implements OnInit, OnDestroy {
  usuarios: IUsuario[] = [];
  usuariosSubscription: Subscription = new Subscription();
  error: any;
  loading: boolean;

  constructor(private store: Store<IAppState>) {}

  ngOnInit() {
    this.store.dispatch(new fromUsuariosAction.UsuariosRequest());
    this.usuariosSubscription = this.store
      .select("usuarios")
      .subscribe(response => {
        this.loading = response.loading;
        this.error = response.error;
        this.usuarios = response.items;
      });
  }

  ngOnDestroy() {
    this.usuariosSubscription.unsubscribe();
  }
}
