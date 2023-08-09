import { Component, OnInit, Output ,EventEmitter} from '@angular/core';

//Importamos lo necesario para construir el formulario
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit{

  //Definimos el formulario
 loginForm:FormGroup = new FormGroup({});

 @Output() loginAction:EventEmitter<{}> = new EventEmitter<{}>(); //con esto podremos emitir el objeto, que seran los valores del formulario
 //Se lo tendremos que pasar a nuestro componente superior, en este caso nuestra form page

 constructor(private formbuilder:FormBuilder){}


  ngOnInit(): void {

    this.loginForm = this.formbuilder.group(
      {
        //Campo obligatorio y de tipo email
        email:['',Validators.compose([Validators.required, Validators.email])],
        //Campo obligatorio y con expresion regular
        password:['',Validators.compose([Validators.required,Validators.pattern('[a-z]*')])],
      }
    )
      
  }

  //Es necesario generar los getter y setter
  get email(){
    return this.loginForm.get('email');
  }

  get password(){
    return this.loginForm.get('password');
  }

  //Metodo submit del formulario
  enviarFormulario(){
    //Controlar que el formulario sea valido y realizar un tipo de accion
    if(this.loginForm.valid){
      console.table(this.loginForm);

      this.loginAction.emit(this.loginForm.value) //estariamos mandando el objeto con los valores

      //Reseteamos los campos del formulario
      this.loginForm.reset();
    }

  }

}

