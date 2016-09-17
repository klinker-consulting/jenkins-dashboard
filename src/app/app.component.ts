import { Component, ViewChild } from '@angular/core';
import { MdSidenav } from '@angular2-material/sidenav';

@Component({
    selector: 'app',
    template: require('./app.component.html')
})
export class AppComponent {
    @ViewChild(MdSidenav) sidenav: MdSidenav;

    toggleSidenav() {
        if (this.sidenav.opened)
            this.sidenav.close();
        else   
            this.sidenav.open();
    }    
}