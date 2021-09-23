import { Filtros } from './../filtros.model';
import { FiltroService } from './../../services/filtros.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserAnuncioService } from 'src/app/services/user-anuncio.service';
import { UserAnuncio } from './contactar-empleador.model';
import { Observable } from 'rxjs';
import { LoadingController } from '@ionic/angular';
import {take, tap} from 'rxjs/operators';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contactar-empleador',
  templateUrl: './contactar-empleador.page.html',
  styleUrls: ['./contactar-empleador.page.scss'],
})
export class ContactarEmpleadorPage implements OnInit {
  userAnuncio$: Observable<UserAnuncio[]>;
  form: FormGroup;
  filtro : Filtros;

  constructor(private UserAnuncioService : UserAnuncioService , private loadingCtrl: LoadingController, private ActivatedRoute:ActivatedRoute, private FiltroService: FiltroService) { }

  async ngOnInit() {

    this.form = new FormGroup({
      importe: new FormControl(null,[Validators.required]),
      tiempo: new FormControl(null,[Validators.required]),
      descripcion: new FormControl(null,[Validators.required]),
      
    });

    this.ActivatedRoute.paramMap.subscribe(paramMap =>{
      const recipeId = paramMap.get('id');
    // this.filtro =  this.FiltroService.getAnuncio(recipeId);;
     console.log("hecho");
      console.log(this.filtro);
      console.log("hecho");
    })
    
    
    /* const loading = await this.loadingCtrl.create({message: 'loading ...'});
    loading.present(); */

    this.userAnuncio$ = this.UserAnuncioService.getUsersAnuncios().pipe(
      tap(userAnuncio =>{
        /* loading.dismiss(); */
        console.log("mensaje",userAnuncio);
        return userAnuncio;
      })
    );
  }

  async submitPostula(){
    const loading = await this.loadingCtrl.create({message: 'Loading ...'});
    loading.present();
    this.UserAnuncioService.addUserAnuncio(this.form.value)
    .pipe(take(1))
    .subscribe((UserAnuncio)=>{
      console.log(UserAnuncio);
      loading.dismiss();
    })
  }
}
