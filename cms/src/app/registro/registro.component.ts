import { Component, OnInit } from '@angular/core';
// import Swal from 'sweetalert2';

declare var $: any;

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $("#fecha").val("");
  }
  // aceptarAccion(){
  //   Swal.fire(
  //     'Good job!',
  //     'You clicked the button!',
  //     'success'
  //   )
  // }
}
