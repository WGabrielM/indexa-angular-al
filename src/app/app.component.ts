import agenda from './angenda.json'
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ContactComponent } from "./components/contact/contact.component";
import { SplitterComponent } from "./components/splitter/splitter.component";
import { ContainerComponent } from "./components/container/container.component";

interface Contact {
  id: number
  name: string
  telephone: string
}


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ContainerComponent, ContainerComponent, HeaderComponent, SplitterComponent, ContactComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  alphabet: string = 'abcdefghijklmnopqrstuvwxyz'
  contacts: Contact[] = agenda;

  filterByText: string = ''

  private removeAccent(text: string): string {
    return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  filterContactByText(): Contact[] {
    if (!this.filterByText) {
      return this.contacts
    }

    return this.contacts.filter(contact => {
      return contact.name.toLowerCase().includes(this.filterByText.toLowerCase())
    })
  }

  filterContactsByInitialLetter(letter: string): Contact[] {
    return this.filterContactByText().filter(contact => {
      return this.removeAccent(contact.name).toLowerCase().startsWith(this.removeAccent(letter).toLowerCase());
    })
  }
}
