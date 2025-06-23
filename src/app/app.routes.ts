import { Routes } from '@angular/router';
import { SearchNameComponent } from './search-name/searchName.component';
import { TypeCombatComponent } from './type-combat/type-combat.component';

export const routes: Routes = [
  { path: 'pokemon', children: [
      { path: '', component: SearchNameComponent },         
      { path: 'tipos', component: TypeCombatComponent }     
    ]
  },
  { path: '**', redirectTo: 'pokemon' }
];
