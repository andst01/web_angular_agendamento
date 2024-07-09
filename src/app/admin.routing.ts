import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './_guard/auth.guard';
import { RegistrarUsuarioComponent } from './usuario/registrar-usuario/registrar-usuario.component';
import { AuthCallbackComponent } from './auth-callback/auth-callback.component';
import { AuthService } from './_services/auth.service';
import { ListarUsuarioComponent } from './usuario/listar-usuario/listar-usuario.component';
import { ObterAgendamentoComponent } from './agendamento/obter-agendamento/obter-agendamento.component';
import { ListarAgendamentoComponent } from './agendamento/listar-agendamento/listar-agendamento.component';

export const AdminRoutes: Routes = [
  { path: 'auth-callback', component: AuthCallbackComponent },
  {
    path: '',

    children: [

      { path: 'obter-agendamento', component: ObterAgendamentoComponent },
      { path: 'home', component: HomeComponent },
      { path: 'editar-cadastro/:idPessoa', component: RegistrarUsuarioComponent },
      { path: '', redirectTo: '/home', pathMatch: 'full'},
      { path: 'listar-usuario', component: ListarUsuarioComponent },
      { path: 'agendamentos', component: ListarAgendamentoComponent }
    ],

  },

  { path: '**', redirectTo: '', pathMatch: 'full' }
];

//export const AdminRoutes = RouterModule.forChild(routes);
