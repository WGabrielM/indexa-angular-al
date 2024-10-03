import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContainerComponent } from "./components/container/container.component";
import { HeaderComponent } from './components/header/header.component';
import { SplitterComponent } from "./components/splitter/splitter.component";
import { ContactComponent } from "./components/contact/contact.component";

interface Contact {
  id: number
  name: string
  telephone: string
}

import agenda from './angenda.json'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ContainerComponent, ContainerComponent, HeaderComponent, SplitterComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  alphabet: string = 'abcdefghijklmnopqrstuvwxyz'
  contacts: Contact[] = agenda;

  filterContactsByInitialLetter(letter: string): Contact[] {
    return this.contacts.filter(contact => {
      return contact.name.toLowerCase().startsWith(letter)
    })
  }
}
