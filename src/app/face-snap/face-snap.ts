import { Component, Input,OnInit  } from '@angular/core';
import { FaceSnap0 } from '../Models/face-snap';// importation du modele facesnap depuis le dossier models
import { NgStyle , NgClass} from '@angular/common';


@Component({
  selector: 'app-face-snap',
  imports: [NgStyle, NgClass],
  templateUrl: './face-snap.html',
  styleUrl: './face-snap.scss',
})
export class FaceSnap implements OnInit {
  @Input()FaceSnap0!:FaceSnap0;//permet d'importer la classe Facesnapdepuis le dossier models dans lequel est contenu le fichier la classe 
 
  snapButtontext!:string;
  usersnaped!:boolean;

ngOnInit():void {   //la méthode ngOnInit est une méthode du cycle de vie d'un composant Angular qui est appelée après que le composant a été initialisé. Elle est utilisée pour effectuer des tâches d'initialisation, telles que la récupération de données ou la configuration de l'état initial du composant.
  this.snapButtontext = 'Aimer';
  this.usersnaped = false;
}


onSnaps(): void {
    if (this.usersnaped) {
      this.unSnap();
    } else {
      this.snap();
    }
  }

unSnap() {
    this.FaceSnap0.removeSnaps();
    this.snapButtontext = 'Aimer';
    this.usersnaped = false;
}

snap() {
    this.FaceSnap0.addSnaps();
    this.snapButtontext = 'Pas aimer';
    this.usersnaped = true;
}

}
