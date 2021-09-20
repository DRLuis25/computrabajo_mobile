import { Component, OnInit } from '@angular/core';
import { FiltroService } from '../services/filtros.service';
import { LoadingController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Filtros } from './filtros.model';
import {tap} from 'rxjs/operators';
@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.page.html',
  styleUrls: ['./filtros.page.scss'],
})
export class FiltrosPage implements OnInit {
  anuncios$: Observable<Filtros[]>;

  constructor(private FiltroService: FiltroService, private loadingCtrl: LoadingController) { }

  async ngOnInit() {
    const loading = await this.loadingCtrl.create({message: 'loading ...'});
    loading.present();

    this.anuncios$ = this.FiltroService.getAnuncios().pipe(
      tap(anuncios =>{
        loading.dismiss();
        return anuncios;
      })
    );
  }
  }

