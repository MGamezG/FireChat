import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/providers/chatService/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  mensaje!: string
  elementScroll:any;
  constructor(public chatService: ChatService) {
    this.chatService.cargarMensaje().subscribe(
      // (data: any[]) => {
      //   console.log(data)
      // }
      ()=>{
        setTimeout(()=>{
          this.elementScroll.scrollTop=this.elementScroll.scrollHeight;
        },20)

      }
    )
  }


  ngOnInit(): void {
    this.elementScroll=document.getElementById('app-mensajes')
  }
  enviar_mensaje() {
    if(this.mensaje.length==0){
      return;
    }else{
      this.chatService.addMensaje(this.mensaje).then(
        ()=>{
          console.log('Mensaje guardado:',this.mensaje)
        }
      ).catch(
        (err)=>{
          console.log('error al enviar',err)
        }
      );

    }

  }

}
