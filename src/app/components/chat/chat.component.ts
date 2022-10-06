import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/providers/chatService/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  mensaje!:string
  constructor(public chatService:ChatService) {
    this.chatService.cargarMensaje().subscribe(
      (data:any[])=>{
        console.log(data)
      }
    )
  }


  ngOnInit(): void {
  }
  enviar_mensaje(){
    console.log(this.mensaje)
  }

}
