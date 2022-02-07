import { Component, OnInit } from '@angular/core';
import { Language } from 'src/app/models/language.model';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  languages: Language[] = [];

  constructor(
    private languageService: LanguageService,
  ) {
    this.languages = this.languageService?.languages
  }

  ngOnInit(): void {
  }

  getDefaultLanguage(): Language {
    return this.languageService.defaultLanguage;
  }

}
