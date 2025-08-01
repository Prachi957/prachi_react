import config from "../config/config.js";
import {Client, Account, ID} from "appwrite";

export class AuthService {
    client = new Client();
    account;

    //This constructor is made so that the account is created only when the oject is called and not by default everytime the class is called.

    constructor() {
        this.client
        .setEndpoint(config.appwriteUrl)
        .setProject(config.appwriteProjectId);

        this.account = new Account(this.client);
    }

    async CreateAccount({email, password, name}) {
        try {
          const userAccount = await this.account.create(ID.unique(), email, password, name)
          if (userAccount) {
            //call another method
            return this.login({email, password});
          } else {
            return userAccount;
          }
        } catch (error) {
            throw error;
        }
    }

    async login({email, password}) {
        try {
            return await this.account.createEmailSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            if(this.account){
                return await this.account.get();
            }
            return null;        
        } catch (error) {
            throw error;
        }
    }

    async logout() {
        try {
            return await this.account.deleteSessions();        
        } catch (error) {
            console.log("Appwrite Service :: logout :: error :: ", error);
            
        }
    }
}

// Making object of class AuthService so that the methods of this class can be directly used by using Objectname.Methodname .

const authService = new AuthService();

export default authService;