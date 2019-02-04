import {  Validator, AbstractControl, NG_VALIDATORS } from "@angular/forms";
import { Directive, Input } from "@angular/core";

@Directive({
    selector:'[selectvalidators]',
    providers:[{
        provide:NG_VALIDATORS,
        useExisting:SelectValidator,
        multi:true
    }]
})
export class SelectValidator implements Validator{
    @Input()
    selectvalidators:string;
   validate(control:AbstractControl):{[Key:string]:any}|null  {
       console.log(control.value)
       console.log(this.selectvalidators)
     return  control.value===this.selectvalidators?{'defaultselected':true}:null

   }

    
}