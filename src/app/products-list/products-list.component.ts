import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})


export class ProductsListComponent implements OnInit {

  products: Array<object> = [
    {
       "id":1,
       "original_language":"en",
       "overview":"Tom the cat and Jerry the mouse get kicked out of their home and relocate to a fancy New York hotel, where a scrappy employee named Kayla will lose her job if she can’t evict Jerry before a high-class wedding at the hotel. Her solution? Hiring Tom to get rid of the pesky mouse.",
       "popularity":4213.261,
       "poster_path":"https://image.tmdb.org/t/p/w342/6KErczPBROQty7QoIsaa6wJYXZi.jpg",
       "release_date":"Wed Mar 8 2021 02:00:00 GMT+0200 (Eastern European Standard Time)",
       "title":"Tom & Jerry",
       "vote_average":8,
       "stock_avaliable":true
    },
    {
       "id":2,
       "original_language":"en",
       "overview":"An evil sorceress transports the gang back to the age of chivalrous knights, spell-casting wizards, and fire-breathing dragons.",
       "popularity":839.678,
       "poster_path":"https://image.tmdb.org/t/p/w342/sCoG0ibohbPrnyomtzegSuBL40L.jpg",
       "release_date":"Wed Mar 15 2020 02:00:00 GMT+0200 (Eastern European Standard Time)",
       "title":"Scooby-Doo! The Sword and the Scoob",
       "vote_average":7.5,
       "stock_avaliable":false
    },
    {
       "id":3,
       "original_language":"en",
       "overview":"Joe Gardner is a middle school teacher with a love for jazz music. After a successful gig at the Half Note Club, he suddenly gets into an accident that separates his soul from his body and is transported to the You Seminar, a center in which souls develop and gain passions before being transported to a newborn child. Joe must enlist help from the other souls-in-training, like 22, a soul who has spent eons in the You Seminar, in order to get back to Earth.",
       "popularity":839.678,
       "poster_path":"https://image.tmdb.org/t/p/w342/hm58Jw4Lw8OIeECIq5qyPYhAeRJ.jpg",
       "release_date":"Wed Mar 22 2021 02:00:00 GMT+0200 (Eastern European Standard Time)",
       "title":"Soul",
       "vote_average":8.3,
       "stock_avaliable":true
    },
    {
       "id":4,
       "original_language":"en",
       "overview":"Long ago, in the fantasy world of Kumandra, humans and dragons lived together in harmony. But when an evil force threatened the land, the dragons sacrificed themselves to save humanity. Now, 500 years later, that same evil has returned and it’s up to a lone warrior, Raya, to track down the legendary last dragon to restore the fractured land and its divided people.",
       "popularity":839.678,
       "poster_path":"https://image.tmdb.org/t/p/w342/lPsD10PP4rgUGiGR4CCXA6iY0QQ.jpg",
       "release_date":"Wed Feb 20 2021 02:00:00 GMT+0200 (Eastern European Standard Time)",
       "title":"Raya and the Last Dragon",
       "vote_average":8.1,
       "stock_avaliable":true
    },
    {
       "id":5,
       "original_language":"en",
       "overview":"The previously untold origins of Olaf, the innocent and insightful, summer-loving snowman are revealed as we follow Olaf’s first steps as he comes to life and searches for his identity in the snowy mountains outside Arendelle.",
       "poster_path":"https://image.tmdb.org/t/p/w342/hddzYJtfYYeMDOQVcH58n8m1W3A.jpg",
       "release_date":"Wed Mar 10 2020 02:00:00 GMT+0200 (Eastern European Standard Time)",
       "title":"Once Upon a Snowman",
       "vote_average":6.8,
       "stock_avaliable":false
    },
    {
       "id":6,
       "original_language":"ar",
       "overview":"A young lion prince is cast out of his pride by his cruel uncle, who claims he killed his father. While the uncle rules with an iron paw, the prince grows up beyond the Savannah, living by a philosophy: No worries for the rest of your days. But when his past comes to haunt him, the young prince must decide his fate: Will he remain an outcast or face his demons and become what he needs to be?",
       "popularity":839.678,
       "poster_path":"https://image.tmdb.org/t/p/w342/sKCr78MXSLixwmZ8DyJLrpMsd15.jpg",
       "release_date":"Wed Mar 23 1994 02:00:00 GMT+0200 (Eastern European Standard Time)",
       "title":"The Lion King",
       "vote_average":4.2,
       "stock_avaliable":false
    }
 ];

  constructor() { }

  @Input() messageValue;

  // @Output() newItemEvent = new EventEmitter<string>()

  // outputMessage: 'Hello from child';

  ngOnInit(): void {
  }

  // mesFromChild(val) {
  //   this.newItemEvent.emit(val)
  // }

}
