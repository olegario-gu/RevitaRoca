import { AlertasComponent } from './../alertas/alertas.component';
import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Injectable({
  providedIn: 'root'
})
export class AlertasService {

  constructor(private bsModalService: BsModalService) {}

  private showAlert(mensagem: string, type: string) {
    const bsModalRef: BsModalRef = this.bsModalService.show(AlertasComponent)
    bsModalRef.content.type = type
    bsModalRef.content.mensagem = mensagem
  }

  showAlertDanger(mensagem: string) {
    this.showAlert(mensagem, 'danger')
  }

  showAlertSuccess(mensagem: string) {
    this.showAlert(mensagem, 'success')
  }

  showAlertInfo(mensagem: string) {
    this.showAlert(mensagem, 'info')
  }
}
