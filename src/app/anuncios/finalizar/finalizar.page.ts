import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AnuncioService } from '../anuncio.service';
@Component({
	selector: 'app-finalizar',
	templateUrl: './finalizar.page.html',
	styleUrls: ['./finalizar.page.scss'],
})
export class FinalizarPage implements OnInit {
  anuncio: any = [];
  distrito: any = [];
  ciudad: any = [];
  departamento: any = [];
  termino = 1;
  constructor(
    private anuncioService: AnuncioService,
    private activatedRoute: ActivatedRoute,
    private alertController: AlertController,
    private router: Router
  ) {}

  ngOnInit() {
  	this.activatedRoute.paramMap.subscribe((paramMap) => {
  		const anuncioId = paramMap.get('anuncioId');
  		//console.log('anuncioId: ', anuncioId);
  		this.anuncioService.getAnuncioById(anuncioId).subscribe(
  			(res) => {
  				this.anuncio = res.data;
  				this.distrito = res.data.distrito;
  				this.ciudad = res.data.ciudad;
  				this.departamento = res.data.departamento;
  			},
  			(err) => {
  				console.log('Error al obtener el anuncio:', err);
  			}
  		);
  	});
  }
  async finalizarAnuncio(id: string) {
  	const alert = await this.alertController.create({
  		cssClass: 'my-custom-alert',
  		header: 'Finalizar anuncio',
  		subHeader: 'Al finalizar este anuncio, se notificará al Empleador que no se requiere más trabajo para este anuncio.',
  		message: '¿Cuáles son los términos para finalizar este anuncio?',
  		inputs: [
  			{
  				name: 'radio1',
  				type: 'radio',
  				label: 'Estoy satisfecho, se han cumplido todos los requisitos de mi anuncio.',
  				handler: () => this.termino = 1,
  				checked: true
  			},
  			{
  				name: 'radio2',
  				type: 'radio',
  				label: 'El Empleador no puede completar mi anuncio.',
  				handler: () => this.termino = 0
  			}
  		],
  		buttons: [
  			{
  				text: 'Cancel',
  				role: 'cancel',
  				cssClass: 'secondary',
  				handler: () => {
  					console.log('Confirm Cancel');
  				}
  			}, {
  				text: 'Ok',
  				handler: () => {
  					console.log('Termino',this.termino);
  					this.router.navigate(['/anuncios/finalizar',this.anuncio.id,'valoracion',this.termino]);
  				}
  			}
  		]
  	});
  	await alert.present();
  }

}
