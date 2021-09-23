import { Component, OnInit } from '@angular/core';
import { AnuncioService } from '../anuncio.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-anuncio',
  templateUrl: './editar-anuncio.page.html',
  styleUrls: ['./editar-anuncio.page.scss'],
})
export class EditarAnuncioPage implements OnInit {

  anuncio: any = [];

  constructor(
    private anuncioService: AnuncioService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
  		const anuncioId = paramMap.get('anuncioId');
  		this.anuncioService.getAnuncioById(anuncioId).subscribe(
  			(res) => {
  				this.anuncio = res.data;
  				//console.log('termino: ',this.termino);
  			},
  			(err) => {
  				console.log('Error al obtener el anuncio:', err);
  			}
  		);
  	});
  }

  editarAnuncio(id, fecha, email, telefono, direccion, titulo, descripcion, minimo, maximo) {
    this.anuncioService.editAnuncio(id,fecha.value.substring(0, 10), email.value, telefono.value, direccion.value, titulo.value, descripcion.value, minimo.value, maximo.value).subscribe((res)=> {
      console.log(res);
      this.router.navigate(['/anuncios/mis-anuncios']);
    },(err)=>{
      console.log(err);
    });
  }

}
