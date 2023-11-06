import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  firstName: string = '';
  lastName: string = '';
  phoneNumber: string = '';
  contactList: any[] = [];

  submitForm() {
    const newContact = {
      firstName: this.firstName,
      lastName: this.lastName,
      phoneNumber: this.phoneNumber
    }

    this.contactList.push(newContact);

    this.contactList.sort((a, b) => a.lastName.localeCompare(b.lastName));

    // Limpa os campos formulário
    this.firstName = '';
    this.lastName = '';
    this.phoneNumber = '';
  }

  ngOnInit(): void {
    this.preencherLista();
  }

  preencherLista() {
  }
}
