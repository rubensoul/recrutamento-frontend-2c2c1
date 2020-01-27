import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClanPageRoutingModule } from './clan-routing.module';

import { ClanPage } from './clan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClanPageRoutingModule
  ],
  declarations: [ClanPage]
})
export class ClanPageModule {}
