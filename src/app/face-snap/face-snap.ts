import { Component } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  imports: [],
  templateUrl: './face-snap.html',
  styleUrl: './face-snap.scss',
})
export class FaceSnap {
  title!:string;
  description!:string;
  creatAt!:Date;
  snaps!:Number;
  imgUrl!:string;

ngOnInit() {  
  this.title = 'Mickeal poster';
  this.description = 'Mickeal is a best player in the world';
  this.creatAt = new Date();
  this.snaps = 0;
  this.imgUrl = 'https://admin.sportshackster.com/WallPaperMedia/PlayerWallPaperImage/Jordan-2_63838719573730.3.jpg';
}
  
}
