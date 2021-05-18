import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq-page',
  templateUrl: './faq-page.component.html',
  styleUrls: ['./faq-page.component.scss'],
})
export class FaqPageComponent implements OnInit {
  questions = [
    {
      question: 'Jak założyć konto i korzystać z aplikacji?',
      answer:
        'Należy utworzyć konto, podając przy tym adres email, nickname, hasło do konta oraz rola jaką chce się pełnić w ramach aplikacji ' +
        'Podany adres email będzie służył jako identyfikator uczestnika promocji. ' +
        'Role do wyboru: ' +
        'uczestnik promocji  (klient) - możliwość brania udzialu w promocjach na tańsze produkty. ' +
        'właściciel promocji (sklep) - możliwość zakładania promocji i modyfikowania punktów uczestników własnych promocji.',
    },
    {
      question: 'Jak zapisać się do promocji?',
      answer:
        'Po zalogowaniu do serwisu wejdź w zakładkę DOSTĘPNE PROMOCJE i wybierz z listy interesujące Cię promocje klikając w ' +
        'przycisk "ZAPISZ SIĘ". Promocja automatycznie zapisze się do Twojego konta. ',
    },
    {
      question: 'Jak sprawdzić w jakich promocjach biorę udział?',
      answer:
        'Po zalogowaniu do serwisu wejdź w zakładkę MOJE PROMOCJE - jest tam lista wszystkich Twoich promocji, do których Cię zapisano.',
    },
    {
      question: 'Jak działa przyznawanie punktów?',
      answer:
        'Punkty są dodawane na podstawie kuponu wygenerowanego przez sprzedawcę. ' +
        'Kupon jest wydawany uczestnikowi danej promocji, jeśli w ramach transkacji spełnił któryś z warunków uwzględnionych w tej promocji. ' +
        'W celu dopisania sobie nowych punktów, uczestnik musi wprowadzić kod z otrzymanego kuponu pod specjalnym adresem promocji: .../.../....com . ' +
        'Jeśli okaże się, że po dodaniu punktów uczestnik uzyskał już wymaganą ilość punktów do odebrania nagrody - może natychmiast udać się po jej odbiór ' +
        'do dowolnego przedstawiciela sklepu organizującego promocję. Punkty zostaną zweryfikowane na podstawie adresu email uczestnika. ',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
