import { AuthGuard } from './auth/auth-guard.service';
import { HomeComponent } from './core/home/home.component';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes = [
  { path: '', component: HomeComponent},
  { path: 'auth', loadChildren: './auth/auth.module#AuthModule'}];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: true, preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
