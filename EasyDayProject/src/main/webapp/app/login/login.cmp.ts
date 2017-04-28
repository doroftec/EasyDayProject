import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

import { Message } from 'primeng/primeng';

import { AppService } from '../util/services/app.service';

export class Hero {
  id: number;
  name: string;
}

@Component({
    moduleId: module.id,
    templateUrl: 'login.cmp.html',
    encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit{

userform: FormGroup;
msgs: Message[] = [];

constructor(private fb: FormBuilder, private _router: Router, private _appService: AppService){}

  ngOnInit(){
      this.userform = this.fb.group({
            username: ['',[Validators.required]],
            password: ['', [Validators.compose([Validators.required])]]
        });
  }

  onSubmit(value: any){
        console.log(value);
        this._router.navigate(['home']);
        console.log(value.username);
        this._appService.setUsername(value.username);
  }
}
