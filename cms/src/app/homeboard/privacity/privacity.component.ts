import { Component, OnInit } from '@angular/core';

declare var $: any; 

@Component({
  selector: 'app-privacity',
  templateUrl: './privacity.component.html',
  styleUrls: ['./privacity.component.css']
})
export class PrivacityComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
    $( "input:checkbox" ).on("click",function(){
      $("input[type=submit]").removeAttr("disabled"); 
      if ($("input[type=submit]").removeAttr("disabled")==true){
        $("input:checkbox").removeAttr("checked")
      } else{
        $("input:checkbox").removeAttr("unckecked");
        $("input[type=submit]").Attr("disabled");
      }
      });
  }

//   toggleDeshabilitar(){
//     $( "input:checkbox" ).on("click",function(){
//       $("input[type=submit]").removeAttr("disabled"); 
//       });
// }
}