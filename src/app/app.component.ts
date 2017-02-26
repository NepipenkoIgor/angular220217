import {
  AfterViewInit, Component, ContentChild, ContentChildren, ElementRef, ViewChild, ViewChildren, ViewEncapsulation,

} from '@angular/core';

import { HeaderComponent } from './header/header.component';

@Component(
  {
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.Native
  }
)
export class AppComponent implements AfterViewInit {

  public style: { [key: string]: string|number } = {
    width: '25px',
    float: 'left',
    border: '1px solid grey',
    'border-radius': '50%'
  };
  public tab: string = 'profile';

  public users: User[] = [
    {
      'firstName': 'Юрий',
      'surname': 'Гажала',
      'photo': 'http://i.imgur.com/XwFFXcF.jpg',
      'country': 'ua'
    },
    {
      'firstName': 'Кира',
      'surname': 'Шатулова',
      'photo': 'http://i.imgur.com/rYsRnhW.jpg',
      'country': 'ru'
    },
    {
      'firstName': 'Дмитрий',
      'surname': 'Симоненко',
      'photo': 'http://i.imgur.com/gXtYESW.png',
      'country': 'ua'
    },
    {
      'firstName': 'Виталий',
      'surname': 'Кашкель',
      'photo': 'http://i.imgur.com/WUiAjWd.png',
      'country': 'by'
    },
    {
      'firstName': 'Алексей',
      'surname': 'Максимов',
      'country': 'ru'
    },
    {
      'firstName': 'Евгений',
      'surname': 'Саенко',
      'photo': 'http://i.imgur.com/8NhHkLs.jpg',
      'country': 'ru'
    },
    {
      'firstName': 'Сергей',
      'surname': 'Дрозд',
      'photo': 'http://i.imgur.com/vI2JjXA.jpg',
      'country': 'ua'
    },
    {
      'firstName': 'Виталий',
      'surname': 'Ковалев',
      'country': 'ru'
    },
    {
      'firstName': 'Антон',
      'surname': 'Григорьев',
      'country': 'ru'
    },
    {
      'firstName': 'Виталия',
      'surname': 'Бубко',
      'country': 'ru'
    },
    {
      'firstName': 'Роман',
      'surname': 'Ермоченков',
      'photo': 'http://i.imgur.com/XkL44ac.jpg',
      'country': 'ua'
    },
    {
      'firstName': 'Марк',
      'surname': 'Партола',
      'photo': 'http://i.imgur.com/YQWyI0r.jpg',
      'country': 'ru'
    },
    {
      'firstName': 'Кирилл',
      'surname': 'Уразманов',
      'photo': 'http://i.imgur.com/N4nxPof.jpg',
      'country': 'ru'
    },
    {
      'firstName': 'Олег',
      'surname': 'Легун',
      'photo': 'http://i.imgur.com/Gmg5OAZ.png',
      'country': 'ru'
    },
    {
      'firstName': 'Александр',
      'surname': 'Ильющеня',
      'country': 'by'
    },
    {
      'firstName': 'Alexey',
      'surname': 'Tarasenko',
      'country': 'ru'
    },
    {
      'firstName': 'Евгений',
      'surname': 'Шелухин',
      'photo': 'http://i.imgur.com/2TXQ4lo.jpg',
      'country': 'ru'
    },
    {
      'firstName': 'Кислотник',
      'surname': 'Чужой',
      'photo': 'http://i.imgur.com/GbOFow3.jpg',
      'country': 'ru'
    },
    {
      'firstName': 'Иван',
      'surname': 'Лобанов',
      'photo': 'http://i.imgur.com/0KmAEkX.jpg',
      'country': 'ru'
    },
    {
      'firstName': 'Денис',
      'surname': 'Шавензов',
      'country': 'ru'
    }
  ];

  public ngAfterViewInit(): void {
    // console.info(this.search);
    // console.info(this.header);
  }

}
