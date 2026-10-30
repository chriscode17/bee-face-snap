import { Injectable } from '@angular/core';
import { SnapType } from '../Models/snap-type.type';
import { FaceSnap0 } from '../Models/face-snap';

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {
  private faceSnaps: FaceSnap0[] = [
       new FaceSnap0(
            'Mickeal poster',
            10,
            'Mickeal is a best player in the world',
            'https://admin.sportshackster.com/WallPaperMedia/PlayerWallPaperImage/Jordan-2_63838719573730.3.jpg',
            new Date(),
          0
          ).withLocation('chicago'),
      
          new FaceSnap0(
          'Kobe poster',
          20,
          'Mamba mentality ',
          'https://tse3.mm.bing.net/th/id/OIP.vsiy3rKqvz-dNNuKn2ndFwHaJQ?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
          new Date(),
          0
        ).withLocation('Los Angeles'),
        new FaceSnap0(
          'Iverson poster',
          15,
          'The Answer ',
          'https://m.media-amazon.com/images/I/71N7qMvqoOL._AC_SL1500_.jpg',
          new Date(),
          0
        ).withLocation('Philadelphie'),
            // ===== Années 90 =====
          new FaceSnap0(
            'Olajuwon poster',
            0,
            'The Dream',
            'https://ih1.redbubble.net/image.2474216282.2081/flat,750x,075,f-pad,750x1000,f8f8f8.webp',
            new Date(),
            0
          ).withLocation('Houston'),
          new FaceSnap0(
            'Barkley poster',
            0,
            'The Round Mound of Rebound',
            'https://mir-s3-cdn-cf.behance.net/project_modules/disp/690b1919251217.562d73806b358.png',
            new Date(),
            0
          ),
          new FaceSnap0(
            'Malone poster',
            0,
            'The Mailman',
            'https://tse2.mm.bing.net/th/id/OIP.BT5jw_-iDbuh5i5JdKiLeAHaNK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
            new Date(),
            0
          ).withLocation('Utah'),
          new FaceSnap0(
            'Stockton poster',
            0,
            'The all-time assists and steals leader',
            'https://tse2.mm.bing.net/th/id/OIP.DoownnxxVZXoUrCr38WaPAHaJ4?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
            new Date(),
            0
          ),
          new FaceSnap0(
            'Pippen poster',
            0,
            'Jordan\'s right-hand man',
            'https://tse1.mm.bing.net/th/id/OIP.3EgKR4W9dZtPmpFJlXpFpAHaJQ?r=0&w=2160&h=2700&rs=1&pid=ImgDetMain&o=7&rm=3',
            new Date(),
            0
          ),
          new FaceSnap0(
            'Robinson poster',
            0,
            'The Admiral',
            'https://i.pinimg.com/736x/e3/7b/ea/e37bea99625645d707fc5b01235b0b0f.jpg',
            new Date(),
            0
          ),
          new FaceSnap0(
            'Shaq poster',
            0,
            'Shaq Diesel, a dominant force in the paint',
            'https://2kdb.net/storage/cards/g/SY4MyKF9tm2Tn1xtOpRrBSOIZ.png',
            new Date(),
            0
          ),
          new FaceSnap0(
            'Erwing poster',
            0,
            'The heart of the Knicks',
            'https://sportsposterwarehouse.com/cdn/shop/products/patrick-ewing-new-york-knicks-1993-starline-poster_large.jpg?v=1680198727',
            new Date(),
            0
          ),
          new FaceSnap0(
            'Reggie Miller poster',
            0,
            'Clutch three-point shooter',
            'https://ih1.redbubble.net/image.4474463651.8958/gbrf,8x10,f,540x540-pad,450x450,f8f8f8.jpg',
            new Date(),
            0
          ),
          new FaceSnap0(
            'Payton poster',
            0,
            'The Glove',
            'https://starmometer.com/wp-content/uploads/2025/09/vivoxnba-gary-payton-819x1024.jpg',
            new Date(),
            0
          ),
      
          // ===== Années 2000 =====
          new FaceSnap0(
            'Duncan poster',
            0,
            'The Big Fundamental',
            'https://ih1.redbubble.net/image.3594202467.4693/flat,750x,075,f-pad,750x1000,f8f8f8.jpg',
            new Date(),
            0
          ),
          new FaceSnap0(
            'Garnett poster',
            0,
            'The Big Ticket',
            'https://tse2.mm.bing.net/th/id/OIP.h2s5z2UPygpWzT2dD9qKqgHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
            new Date(),
            0
          ),
          new FaceSnap0(
            'Nowitzki poster',
            0,
            'The German Wunderkind, MVP 2007',
            'https://img.artpal.com/398651/36-20-3-2-5-54-16m.jpg',
            new Date(),
            0
          ),
          new FaceSnap0(
            'Nash poster',
            0,
            'Two-time MVP and master playmaker',
            'https://external-preview.redd.it/oENEbs0juzhufSuo24NlYcpbzjNCi9gD5Dib_jpP9JM.jpg?width=1080&crop=smart&auto=webp&s=702090f71e0070655ddaf6581f6dc3dc13ccf4c7',
            new Date(),
            0
          ),
          new FaceSnap0(
            'Wade poster',
            0,
            'Flash',
            'https://m.media-amazon.com/images/I/71v4m9ttdrL._AC_SL1500_.jpg',
            new Date(),
            0
          ),
          new FaceSnap0(
            'Ray Allen poster',
            0,
            'Jesus Shuttlesworth, pure shooter',
            'https://wallpapers.com/images/featured/ray-allen-cwcr26nbsmlued1d.jpg',
            new Date(),
            0
          ),
          new FaceSnap0(
            'Pierce poster',
            0,
            'The Truth',
            'https://m.media-amazon.com/images/I/61d2E+qihQL._AC_.jpg',
            new Date(),
            0
          ),
        
          new FaceSnap0(
            'Vince Carter poster',
            0,
            'Vinsanity',
            'https://i.pinimg.com/originals/47/3b/f9/473bf9eb00cf8184733499ede3284d24.jpg',
            new Date(),
            0
          ),
      
          // ===== Années 2010 =====
         
          new FaceSnap0(
            'Curry poster',
            0,
            'The greatest shooter of all time',
            'https://i5.walmartimages.com/seo/NBA-Golden-State-Warriors-Stephen-Curry-22-Wall-Poster-22-375-x-34_5020c802-2ea8-47f2-9992-b6d645a2942a.e9cb99d677b5ebcd65bee3425802a382.jpeg',
            new Date(),
            0
          ),
          new FaceSnap0(
            'Durant poster',
            0,
            'The Slim Reaper',
            'https://cdna.artstation.com/p/assets/images/images/078/982/446/large/art4life-asset.jpg?1723627627',
            new Date(),
            0
          ),
          new FaceSnap0(
            'Kawhi poster',
            0,
            'The Klaw',
            'https://i.pinimg.com/736x/7a/5a/1b/7a5a1b72859e74a4060c69ab3ac5a3ea.jpg',
            new Date(),
            0
          ),
          new FaceSnap0(
            'Westbrook poster',
            0,
            'Mr. Triple-Double',
            'https://m.media-amazon.com/images/I/81gyfVInIML._UF894,1000_QL80_.jpg',
            new Date(),
            0
          ),
          new FaceSnap0(
            'Harden poster',
            0,
            'The Beard',
            'https://tse4.mm.bing.net/th/id/OIP.be6cGWUr3Sace1y7kRNKswAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
            new Date(),
            0
          ),
          new FaceSnap0(
            'Chris Paul poster',
            0,
            'CP3, The Point God',
            'https://m.media-amazon.com/images/I/71yxkZ6XkLL._AC_SL1500_.jpg',
            new Date(),
            0
          ),
          
          new FaceSnap0(
            'Derrick Rose poster',
            0,
            'Youngest MVP in NBA history (2011)',
            'https://i.pinimg.com/736x/9f/54/a9/9f54a9bec233667de79ce59346730e2a.jpg',
            new Date(),
            0
          ),
          new FaceSnap0(
            'Anthony Davis poster',
            0,
            'The Brow',
            'https://wallpapers.com/images/high/anthony-davis-background-6h4fgrru5ptirx3i.jpg',
            new Date(),
            0
          ),
      
          // ===== Années 2020 =====
          new FaceSnap0(
            'Jokic poster',
            0,
            'The Joker, three-time MVP',
            'https://xonomax.com/cdn/shop/files/700223.jpg?v=1723564681&width=1445',
            new Date(),
            0
          ),
          new FaceSnap0(
            'Giannis poster',
            0,
            'The Greek Freak',
            'https://m.media-amazon.com/images/I/71rRvXxRojL.jpg',
            new Date(),
            0
          ),
          new FaceSnap0(
            'SGA poster',
            0,
            'Back-to-back MVP and champion',
            'https://i.pinimg.com/originals/e1/7e/cf/e17ecf97561fa88cfbb3442dec717ca0.png',
            new Date(),
            0
          ),
          new FaceSnap0(
            'Doncic poster',
            0,
            'Luka Magic',
            'https://i.pinimg.com/originals/bc/bf/ae/bcbfaeb99c45c9a6fb938f0d57522ccf.jpg',
            new Date(),
            0
          ),
          new FaceSnap0(
            'Embiid poster',
            0,
            'The Process, MVP 2023',
            'https://mir-s3-cdn-cf.behance.net/project_modules/1400/c0ad1d167167945.642467665b036.jpg',
            new Date(),
            0
          ),
          new FaceSnap0(
            'Tatum poster',
            0,
            'Boston\'s franchise player',
            'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/jayson-tatum-basketball-player-poster-design-template-5756ce419bf297aae799edb9a6b96115_screen.jpg?ts=1750310183',
            new Date(),
            0
          ),
          new FaceSnap0(
            'Booker poster',
            0,
            'Mr. 70, Phoenix\'s scoring machine',
            'https://mir-s3-cdn-cf.behance.net/project_modules/fs/15cdce95732791.661a9ac30b352.jpg',
            new Date(),
            0
          ),
          new FaceSnap0(
            'Edwards poster',
            0,
            'Ant-Man, explosive athlete',
            'https://tse2.mm.bing.net/th/id/OIP.LdyCq1jGaSTAq6sDtODZkQAAAA?r=0&pid=ImgDet&w=206&h=160&c=7&dpr=1.6&o=7&rm=3',
            new Date(),
            0
          ),
          new FaceSnap0(
            'Wembanyama poster',
            0,
            'Wemby, the alien from France',
            'https://xonomax.com/cdn/shop/files/700225.jpg?v=1723564711&width=1445',
            new Date(),
            0
          ),
          new FaceSnap0(
            'Cade Cunningham poster',
            0,
            'Detroit\'s leader, All-NBA First Team',
            'https://images.teepublic.com/derived/production/designs/51845013_0/1697215091/i_m:pid_487,c_61_76_887x1108,bc_ffffff,ar_4x5,o_portrait,pm_4,s_630,q_90.jpg',
            new Date(),
            0
          ),
          new FaceSnap0(
            'Kyrie poster',
            0,
            'uncle drew',
            'https://i.pinimg.com/originals/26/4c/89/264c89e4e8406a26d497fe94cc5eb7f7.jpg',
            new Date(),
            0
          ),
          new FaceSnap0(
            'Mitchel poster',
            0,
            'spida mitchel',
            'https://tse2.mm.bing.net/th/id/OIP.iN4e7cPCTprR7Y92icN4lwAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
            new Date(),
            0
          ),
        ];
         
  getFaceSnaps(): FaceSnap0[] {
    return [...this.faceSnaps];
  }

  
snapFaceSnapById(faceSnapId: string, snapType: SnapType): void {
    const foundFaceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
    if (!foundFaceSnap) {
      throw new Error('FaceSnap not found!');
    }
    foundFaceSnap.snap(snapType);
 }
}



