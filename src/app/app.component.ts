import { Component } from '@angular/core';
import {AngularFirestore } from '@angular/fire/compat/firestore'
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '13_FireChat';
  chats!:Observable<any[]>
  constructor(db:AngularFirestore){
    this.chats=db.collection('chats').valueChanges();
  }
}
