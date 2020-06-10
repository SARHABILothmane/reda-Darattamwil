import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('francais');
}
useLanguage(language: string) {
  this.translate.use(language);
}

  ngOnInit() {
  }

}
