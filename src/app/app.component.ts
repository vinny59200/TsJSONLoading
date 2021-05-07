import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import variableName from '../assets/vv.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

//https://stackoverflow.com/questions/47206924/angular-5-service-to-read-local-json-file
export class AppComponent implements OnInit {

  vvobj: any = variableName;
  
  title = 'VVLOCALJSONLOADING';

  ngOnInit(): void {

    console.log(this.vvobj);
    
    //additionnally manipulate the JSON
    let rewrittenvvobj = rewriteObjectVV1(this.vvobj, "vv1", [{"yay":"yay1"},{"yay":"yay1"},{"yay":"yay1"}]);
    console.log(rewrittenvvobj);

  }

}

function rewriteObjectVV1(obj, key, val) {
  let result={...obj}; ;
  var objects = [];
  for (var i in result) {
    if (i == key) {
      result[i] = val;
      objects.push(result);
    }
  }
  return objects[0];
}
