import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';
import { HttpModule } from '@angular/http';

@NgModule({
    imports: [ BrowserModule, HttpModule],
    providers: [],
    declarations: [ AppComponent ],
    bootstrap: [ AppComponent ]
})
export default class AppModule { }


platformBrowserDynamic().bootstrapModule(AppModule);
