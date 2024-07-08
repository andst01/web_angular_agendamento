import { CloseScrollStrategy } from "@angular/cdk/overlay";
import { Xliff } from "@angular/compiler";
import { User } from "oidc-client";

export class UserAuth {
    public id: number = 0;
    public nome: string = "";
    public id_token: string = "";
    public session_state: any = "";
    public access_token: string = "";
    public refresh_token: string = "";
    public idPessoa: number = 0;
    public perfil: string =  "";
    public userName: string = "";
    public password: string = "" ;

}
