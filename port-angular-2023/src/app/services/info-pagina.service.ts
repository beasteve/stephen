import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root',
})
export class InfoPaginaService {
  info: InfoPagina = {};
  cargada = false;
  equipo: any = [];

  constructor(private http: HttpClient) {
    this.cargarInfo();
    this.cargarEquipo();

    // console.log("assets/data/data-pagina.json")
  }
  private cargarInfo() {
    this.http
      .get('assets/data/data-pagina.json')
      .subscribe((resp: InfoPagina) => {
        this.cargada = true;
        this.info = resp;
        console.log(resp);
      });
  }

  private cargarEquipo() {
    this.http
      .get(
        'https://earnest-dogfish-329813-default-rtdb.europe-west1.firebasedatabase.app/equip.json'
      )
      .subscribe((resp) => {
        this.equipo = resp;
        console.log(resp);
      });
  }
}
