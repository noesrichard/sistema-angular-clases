import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageLoginComponent } from './page/page-login/page-login.component';
import { LoginComponent } from './components/login/login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MenuComponent } from './components/menu/menu.component';
import { HeaderComponent } from './components/header/header.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';

@NgModule({
    declarations: [
        PageLoginComponent,
        LoginComponent,
        MenuComponent,
        HeaderComponent,
    ],
    imports: [
        CommonModule,
        MatMenuModule,
        RouterModule,
        MatFormFieldModule,
        MatInputModule,
        MatListModule,
        MatButtonModule,
        FlexLayoutModule,
        MatToolbarModule,
        MatSidenavModule,
        MatIconModule,
    ],
    exports: [PageLoginComponent, HeaderComponent, MenuComponent],
})
export class CoreModule {}
