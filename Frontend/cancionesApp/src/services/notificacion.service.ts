import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificacionService {

  constructor(private notificacion:ToastrService) { }

  addSuccess(title:string,message:string):void{
    this.notificacion.success(message,title)
  }

  addInfo(title:string,message:string):void{
    this.notificacion.info(message,title)
  }

  addWarning(title:string,message:string):void{
    this.notificacion.warning(message,title)
  }

  addDanger(title:string,message:string):void{
    this.notificacion.error(message,title)
  }
}
