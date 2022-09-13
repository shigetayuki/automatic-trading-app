import { UserImp } from "../interface/user-imp";

export class User implements UserImp{
    userName :string;
    password :string;
    authorityFlg :string;
    errorMsg :string;
    errorUserName :string;
    errorPassword :string;

    constructor() { 
        this.userName ='';
        this.password ='';
        this.authorityFlg ='';
        this.errorMsg ='';
        this.errorUserName ='';
        this.errorPassword =''; 
    }
        
  }