import { rejects } from "assert";
import { promise } from "protractor";

export class AuthService {

    loggedIn: boolean = false;

    login(){
        this.loggedIn = true;
        console.log("loggedIn now is: " + this.loggedIn);
    }
    
    logout(){
        this.loggedIn = false;
        console.log("loggedIn now is: " + this.loggedIn);
    }

    isAuthenticated(){
        
        const promise = new Promise(
            (resolve, reject) => {
                setTimeout( () => {
                    
                    resolve(this.loggedIn);
                } ,700);
            }
        );
        return promise; 
    }
}