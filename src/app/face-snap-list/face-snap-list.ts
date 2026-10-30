import { Component, OnInit } from '@angular/core';
import { FaceSnap0 } from '../Models/face-snap';
import { FaceSnap } from '../face-snap/face-snap';
import {FaceSnapsService} from'../services/face-snap-services'
@Component({
  selector: 'app-face-snap-list',
  imports: [FaceSnap ],
  templateUrl: './face-snap-list.html',
  styleUrl: './face-snap-list.scss',
})
export class FaceSnapList implements OnInit{
  constructor(private faceSnapsService:FaceSnapsService){}
   faceSnaps!: FaceSnap0[]
   ngOnInit(): void {



  this.faceSnaps =this.faceSnapsService.getFaceSnaps()
  }
}
