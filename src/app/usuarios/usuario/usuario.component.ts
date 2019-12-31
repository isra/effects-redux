import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";
import { IAppState } from "../../store/app.reducer";
import * as formUsuarioActions from "../../store/actions";
import { UsuarioModel } from "../../models/usuario.model";
import { IUsuario } from "../../interfaces/usuario";
import { Subscription } from "rxjs";

@Component({
  selector: "app-usuario",
  templateUrl: "./usuario.component.html",
  styles: []
})
export class UsuarioComponent implements OnInit, OnDestroy {
  usuario: IUsuario;
  loading: boolean;
  error: any;
  usuarioSubscription: Subscription = new Subscription();

  constructor(private route: ActivatedRoute, private store: Store<IAppState>) {
    this.usuarioSubscription = this.store
      .select("usuario")
      .subscribe(usuario => {
        this.usuario = usuario.item;
        this.loading = usuario.loading;
        this.error = usuario.error;
      });
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      if (params.get("id")) {
        this.store.dispatch(
          new formUsuarioActions.UsuarioRequest(+params.get("id"))
        );
      }
    });
  }

  ngOnDestroy(): void {
    this.usuarioSubscription.unsubscribe();
  }
}
