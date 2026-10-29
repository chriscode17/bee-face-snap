import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './face-snap/face-snap';
import { FaceSnap0 } from './Models/face-snap';

@Component({
  selector: 'app-root',
  imports: [FaceSnap],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  faceSnaps!: FaceSnap0[]
   ngOnInit(): void {



  this.faceSnaps = [
     new FaceSnap0(
      'Mickeal poster',
      'Mickeal is a best player in the world',
      'https://admin.sportshackster.com/WallPaperMedia/PlayerWallPaperImage/Jordan-2_63838719573730.3.jpg',
      new Date(),
    0
    ),

    new FaceSnap0(
    'Kobe poster',
    'Mamba mentality ',
    'https://tse3.mm.bing.net/th/id/OIP.vsiy3rKqvz-dNNuKn2ndFwHaJQ?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    new Date(),
    0
  ),
  new FaceSnap0(
    'Iverson poster',
    'The Answer ',
    'https://m.media-amazon.com/images/I/71N7qMvqoOL._AC_SL1500_.jpg',
    new Date(),
    0
  )
  ];
    this.faceSnaps[1].setLocation('Los Angeles');
 
  }

 
    
  



  }

