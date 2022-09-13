import { Constant } from './constat'
import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router'
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Authority {
    constructor(private router: Router){}
    
    logout() {
      localStorage.removeItem(Constant.localStorageJWT);
      this.redirectToLoginPage();
    }
  
    // ログイン状態かどうか確認し、ログイン状態でなければログイン画面に遷移する
    checkLoggedIn(): boolean {
      const isLoggedIn = this.isLoggedIn;
      if (!isLoggedIn) {
        this.redirectToLoginPage();
      }
      return isLoggedIn;
    }
  
    // レスポンスヘッダーからトークンを取りだしてローカルストレージに保存
    storeToken<T>(res: HttpResponse<T>) {
      const token = res.headers.get('Authorization');
      if(token != null){
        localStorage.setItem(Constant.localStorageJWT, token);
      }
    }
  
    // ログイン画面に遷移する
    private redirectToLoginPage() {
      this.router.navigate(['/login']);
    }
  
  
    // トークンがあり、有効期限が切れていなければログイン状態とみなす
    get isLoggedIn(): boolean {
      return !this.isLoggedOut;
    }
  
    // トークンがないか、有効期限が切れていたらログアウト状態とみなす
    get isLoggedOut(): boolean {
      if (!this.token) {
        return true;
      } else {
        const payLoad: { sub: string, exp: number } = JSON.parse(window.atob(this.token.split('.')[1]));
        const expireSec = payLoad.exp;
        return expireSec < new Date().getTime() / 1000;
      }
    }
  
    // localStorageからトークンを取得
    get token(): string {
      const token = localStorage.getItem(Constant.localStorageJWT);
      return token ? token : '';
    }

    get ResponseHeader():HttpHeaders{
      return new HttpHeaders({ 'Authorization': this.token });
    }
}