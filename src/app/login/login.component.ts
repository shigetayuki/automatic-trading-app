import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router'
import { LoginService } from '../service/login.service';
import { Authority } from '../authority';
import { IgxSnackbarComponent } from 'igniteui-angular';
import { User } from '../dto/user';
import { Constant } from '../constat';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('usersnackbar') private usersnackbar!: IgxSnackbarComponent;
  @ViewChild('passsnackbar') private passsnackbar!: IgxSnackbarComponent;
  @ViewChild('errorsnackbar') private errorsnackbar!: IgxSnackbarComponent;
  user: User = new User();


  constructor(private loginService: LoginService, private router: Router,private auth:Authority) { }
  ngOnInit(): void {
    localStorage.removeItem(Constant.localStorageJWT);
  }

  sendUserInfo() {
    let errorFlg = false;
    let errorCnt = 0;
    if(this.user.userName==''){
      this.usersnackbar.open('ユーザー名を入力してください。');

      document.getElementsByClassName("igx-overlay__content--relative")[errorCnt]
      .setAttribute("style","position: absolute; top:" + (errorCnt*50+100) +"px;");
      errorCnt++;
      errorFlg = true;
    }
    if(this.user.password==''){
      this.passsnackbar.open('パスワードを入力してください。');
      document.getElementsByClassName("igx-overlay__content--relative")[errorCnt]
      .setAttribute("style","position: absolute; top:" + (errorCnt*50+100) +"px;");
      errorCnt++;
      errorFlg = true;
    }

    if(!errorFlg){
      this.loginService.sendUserInfo(this.user.userName, this.user.password)
        .subscribe(
          res => {
            if(res.body!=null){
              this.auth.storeToken(res);
              
              this.user = this.setUserData(this.user,res.body);
              this.router.navigate(['/resultByMonths']);
            }
          }, error => {
            this.authorityError();
          });
    }
  }
  setUserData(user: User, newUserData: User): User {
    //値があればその値を設定し、undefinedなら空文字を設定する。

    //ユーザー名
    newUserData.userName != undefined ? user.userName = newUserData.userName : user.userName = '';
    //権限フラグ
    newUserData.authorityFlg != undefined ? user.authorityFlg = newUserData.authorityFlg : user.authorityFlg = '';
    //エラーメッセージ
    newUserData.errorMsg != undefined ? user.errorMsg = newUserData.errorMsg : user.errorMsg = '';
    //ユーザー名に対するエラーメッセージ
    newUserData.errorUserName != undefined ? user.errorUserName = newUserData.errorUserName : user.errorUserName = '';
    //パスワードに対するエラーメッセージ
    newUserData.errorPassword != undefined ? user.errorPassword = newUserData.errorPassword : user.errorPassword = '';

    return user;
  }

  authorityError(){
    this.user.password='';
    this.user.errorUserName='';
    this.user.errorPassword='';
    this.errorsnackbar.open('パスワードが誤っています。');

      document.getElementsByClassName("igx-overlay__content--relative")[0]
      .setAttribute("style","position: absolute; top:100px;");
  }
  
}
