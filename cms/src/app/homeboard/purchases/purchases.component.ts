import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.css']
})
export class PurchasesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showHideDiv(ele) {
    var srcElement = document.getElementById(ele);
    if (srcElement != null) {
      if (srcElement.style.display == "block") {
        srcElement.style.display = 'none';
      }
      else {
        srcElement.style.display = 'block';
        $('#det-planilla').hide();
        $('#det-planilla2').hide();    
        $('#divMsg2').hide();    
      }
      return false;
    }
  }

  VolverMes(id){
    $('#det-planilla').show();
    $('#divMsg').hide();
    $('#divMsg2').hide();
  }

  showHideDiv2(ele) {
    var srcElement = document.getElementById(ele);
    if (srcElement != null) {
      if (srcElement.style.display == "block") {
        srcElement.style.display = 'none';
      }
      else {
        srcElement.style.display = 'block';
        $('#det-planilla2').hide();
        $('#det-planilla').hide();    
      }
      return false;
    }
  }

  VolverMes2(id){
    $('#det-planilla2').show();
    $('#divMsg2').hide();
  }


}
