import { AuthGuard } from './auth/auth-guard.service';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full'},
  { path: 'auth', loadChildren: './auth/auth.module#AuthModule'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: true, preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
