import { User } from "oidc-client";

export interface UserAuth {
    id: number;
    nome: string;
    id_token: string;
    session_state: any;
    access_token: string;
    refresh_token: string;
    idPessoa: number;
    perfil: string;
    userName: string;
    password: string ;


    
}
