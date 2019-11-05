import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Maquina } from 'src/app/class/maquinas/maquina';
import { Especificacion } from 'src/app/class/maquinas/especificacion';
import { MaquinaService } from 'src/app/services/maquinas/maquina.service';
import { EspecificacionService } from 'src/app/services/maquinas/especificacion.service';
import { NavFooterService } from 'src/app/services/cambiaRouter/nav-footer.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nueva-maquina',
  templateUrl: './nueva-maquina.component.html',
  styleUrls: ['./nueva-maquina.component.css']
})
export class NuevaMaquinaComponent implements OnInit {

  @Output() altaNUevoArt = new EventEmitter();

  public maquina: Maquina;
  public especificacion: Especificacion;
  public especifList: Especificacion[];
  public mensaje;
  public errorMessage;
  public maquinasList: Maquina[];
  public registroForm: FormGroup;
  public existeId: string;

  constructor(
    private maquinaService: MaquinaService,
    public navFootServ: NavFooterService,
    public EspecifService: EspecificacionService,
    private router: Router,
    private toastr: ToastrService,
    private builder: FormBuilder) {
    this.especificacion = new Especificacion('', '', '');
    this.maquina = new Maquina('', '', '', '', '', '', '', '', '', '');
    this.buildForm();
  }


  ///////// form validations //////
  idMaquina = new FormControl('', [
    Validators.required,
    Validators.minLength(2)
  ]);
  detalle = new FormControl('', [
    Validators.required,
    Validators.minLength(2)
  ]);
  email = new FormControl('', [
    Validators.required,
    Validators.minLength(2)
  ]);
  /*sector = new FormControl('', [  // es un select
    Validators.required,
  ]);*/
  marca = new FormControl('', [
    Validators.required,
    Validators.minLength(2)
  ]);
  fabricanteNombre = new FormControl('', [
    Validators.required,
    Validators.minLength(2)
  ]);
  fabricanteDireccion = new FormControl('', [
    Validators.required,
    Validators.minLength(2)
  ]);
  fabricanteTelefono = new FormControl('', [
    Validators.required,
    Validators.minLength(2)
  ]);
  fabricanteContacto = new FormControl('', [
    Validators.required,
    Validators.minLength(2)
  ]);
  /*
  estado = new FormControl('', [ // es un select
    Validators.required,
  ]); */
  buildForm() {
    this.registroForm = this.builder.group({
      idMaquina: this.idMaquina,
      detalle: this.detalle,
      marca: this.marca,
      // sector: this.sector,
      // estado: this.estado,
      fabricanteNombre: this.fabricanteNombre,
      fabricanteDireccion: this.fabricanteDireccion,
      fabricanteTelefono: this.fabricanteTelefono,
      fabricanteContacto: this.fabricanteContacto
    });
  }///////// end form validations //////

  public eliminar(id: string) {
    this.maquinaService.Eliminar(id).then(() => {
      // this.cargarLista();
    });
  }


  //  traer maquina detalle
  public traerUno() {
    this.maquinaService.MaquinaDetalle().subscribe(response => {
      this.maquina = response;
    },
      error => {
        console.error(error);
      });
  }

  // traer uno por id
  public traerID(id) {
    this.maquinaService.traerUna(id).subscribe(response => {
      this.maquina = response;
    },
      error => {
        console.error(error);
      });
  }

  public update() {
    this.maquinaService.Update(
      this.maquina.idMaquina,
      this.maquina.detalle,
      this.maquina.marca,
      this.maquina.sector,
      this.maquina.estado,
      this.maquina.urlImagen,
      this.maquina.fabricanteNombre,
      this.maquina.fabricanteDireccion,
      this.maquina.fabricanteTelefono,
      this.maquina.fabricanteContacto
    ).then(
      response => {
        if (response['Estado'] === 'OK') {

          console.log(response);
        } else {
          this.errorMessage = response['Mensaje'];
        }
      }
    ).catch(
      error => {
        this.errorMessage = error['Mensaje'];
        console.error(error);
      }
    );
    this.altaEspecificacion();
    this.altaNUevoArt.emit();
    this.maquinaService.Listar();
    // this.limpiar();
    this.registroForm.reset();
    this.toastr.success('Modificado', 'MEYRO - SGC');
  }

  public create() {
    this.maquinaService.Alta(
      this.maquina.idMaquina,
      this.maquina.detalle,
      this.maquina.marca,
      this.maquina.sector,
      this.maquina.estado,
      this.maquina.urlImagen,
      this.maquina.fabricanteNombre,
      this.maquina.fabricanteDireccion,
      this.maquina.fabricanteTelefono,
      this.maquina.fabricanteContacto
    ).then(
      response => {
        if (response['Estado'] === 'OK') {

          console.log(response);
        } else {
          this.errorMessage = response['Mensaje'];
        }
      }
    ).catch(
      error => {
        this.errorMessage = error['Mensaje'];
        console.error(error);
      }
    );
    this.altaEspecificacion();
    this.altaNUevoArt.emit();
    this.maquinaService.Listar();
    // this.limpiar();
    this.registroForm.reset();
    this.toastr.success('Agregado', 'MEYRO - SGC');
  }

  public alta() {
    this.maquinaService.traerUna(this.maquina.idMaquina).subscribe(response => {
      this.existeId = response.idMaquina;
    },
      error => {
        console.error(error);
      });
    if (this.existeId !== undefined) {
      this.update();
    } else {
      this.create();
    }
    this.limpiar();
  }

  cargarLista() {
    this.maquinaService.Listar().subscribe(response => {
      this.maquinasList = response;
    });
  }

  public altaEspecificacion() {
    if (this.especificacion.detalle) {
      this.EspecifService.Alta(this.maquina.idMaquina, this.especificacion.detalle)
        .then(
          response => {
            this.mensaje = response;
            this.cargarListaEspecificaciones();
            this.especificacion.detalle = '';
            console.log(this.especifList);
          }
        )
        .catch(
          error => {
            console.error('ERROR DEL SERVIDOR', error);
          }
        );
    }
  }

  public cargarListaEspecificaciones() {
    this.EspecifService.TraerTodosMaquina(this.maquina.idMaquina).subscribe(response => {
      this.especifList = response;
    });
  }

  public buscar() {
    this.maquinaService.traerUna(this.maquina.idMaquina).subscribe(response => {
      if (response.idMaquina) {
        alert('ya existe, modificar ??');
        // this.maquina = response;
        this.existeId = response.idMaquina;
        this.maquina.detalle = response.detalle;
        this.maquina.estado = response.estado;
        this.maquina.fabricanteContacto = response.fabricanteContacto;
        this.maquina.fabricanteDireccion = response.fabricanteDireccion;
        this.maquina.fabricanteNombre = response.fabricanteNombre;
        this.maquina.fabricanteTelefono = response.fabricanteTelefono;
        this.maquina.marca = response.marca;
        this.maquina.sector = response.sector;
        this.maquina.urlImagen = response.urlImagen;

        this.cargarListaEspecificaciones();
      }
    },
      error => {
        console.error(error);
      });
  }

  public limpiar() {
    this.maquina.idMaquina = '';
    this.maquina.detalle = '';
    this.maquina.estado = '';
    this.maquina.fabricanteContacto = '';
    this.maquina.fabricanteDireccion = '';
    this.maquina.fabricanteNombre = '';
    this.maquina.fabricanteTelefono = '';
    this.maquina.marca = '';
    this.maquina.sector = '';
    this.maquina.urlImagen = '';
    this.especifList = [];
  }

  public borrar(id: string) {
    this.EspecifService.Baja(id).then(() => {
      this.cargarListaEspecificaciones();
      console.log('id a borrar:' + id);
    });
  }

  ngOnInit() {
    this.especifList = [];
    this.navFootServ.show = true;
  }
}
