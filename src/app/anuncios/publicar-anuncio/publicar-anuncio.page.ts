import { Component, OnInit } from '@angular/core';
import { AnuncioService } from '../anuncio.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-publicar-anuncio',
  templateUrl: './publicar-anuncio.page.html',
  styleUrls: ['./publicar-anuncio.page.scss'],
})
export class PublicarAnuncioPage implements OnInit {
  oficios: any = [];
  departamentos: any = [];
  ciudades: any = [];
  distritos: any = [];
  selectIdCiudades: number = 0;
  selectIdDistritos: number = 0;

  constructor(
    private anuncioService: AnuncioService,
    private router: Router
  ) {}

  ngOnInit() {
    this.anuncioService.getOficios().subscribe(
  		(res) => {
  			this.oficios = res.data;
  		},
  		(err) => {
  			console.log('ERROR: ', err);
  		}
  	);

    this.anuncioService.getDepartamentos().subscribe(
  		(res) => {
  			this.departamentos = res.data;
  		},
  		(err) => {
  			console.log('ERROR: ', err);
  		}
  	);
  }

  getCiudades(event) {
    this.anuncioService.getCiudades(event.target.value).subscribe(
  		(res) => {
  			this.ciudades = res.data;
  		},
  		(err) => {
  			console.log('ERROR: ', err);
  		}
  	);
  }

  getDistritos(event) {
    this.anuncioService.getDistritos(event.target.value).subscribe(
  		(res) => {
  			this.distritos = res.data;
  		},
  		(err) => {
  			console.log('ERROR: ', err);
  		}
  	);
  }

  limpiarCiudadDistrito() {
    this.selectIdCiudades = 0;
    this.selectIdDistritos = 0;
    this.ciudades = [];
    this.distritos = [];
    this.anuncioService.getDepartamentos().subscribe(
  		(res) => {
  			this.departamentos = res.data;
  		},
  		(err) => {
  			console.log('ERROR: ', err);
  		}
  	);
  }

  limpiarDistrito() {
    this.selectIdDistritos = 0;
    this.distritos = [];
  }

  guardarNuevoAnuncio(fecha, email, telefono, direccion, titulo, oficio, descripcion, minimo, maximo, idDepartamento, idCiudad, idDistrito) {
    this.anuncioService.createAnuncio(fecha.value.substring(0, 10), email.value, telefono.value, direccion.value, titulo.value, oficio.value, descripcion.value, minimo.value, maximo.value, idDepartamento.value, idCiudad.value, idDistrito.value).subscribe((res)=> {
      console.log(res);
      this.router.navigate(['/anuncios/mis-anuncios']);
    },(err)=>{
      console.log(err);
    });
  }

}
