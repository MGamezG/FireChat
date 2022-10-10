import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable,map  } from 'rxjs'
import { Mensaje } from 'src/app/interfaces/mensaje.interface';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  chats:Mensaje[] = []
  private itemsCollection!: AngularFirestoreCollection<Mensaje>
  items!: Observable<Mensaje[]>
  constructor(private afs: AngularFirestore) { }

  cargarMensaje(){
    this.itemsCollection = this.afs.collection<Mensaje>('chats',ref=>ref.orderBy('fecha', 'desc').limit(5));

    return this.itemsCollection.valueChanges().pipe(
      map(
        (mensajes:Mensaje[])=>{
          //this.chats=mensajes
          this.chats=[]
          for (let mensaje of mensajes) {
            this.chats.unshift(mensaje);
          }
          console.log(this.chats)
         return this.chats
        }
      )
    )
  }
  addMensaje(texto:string){
    let mensaje:Mensaje={
      //TODO:falta el Uid del user
      nombre:'mg',
      mensaje:texto,
      fecha:new Date().getTime()
    }
    return this.itemsCollection.add(mensaje);
  }
}
