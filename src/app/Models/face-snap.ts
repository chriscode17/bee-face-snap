// ici c'est une façon plus simple d'écrire du code orienté objet en typescript, on utilise le mot clé export pour rendre la classe FaceSnap accessible depuis d'autres fichiers. Le constructeur prend les mêmes paramètres que précédemment, mais cette fois-ci, on utilise la syntaxe public pour déclarer les propriétés de la classe directement dans la signature du constructeur. Cela permet de réduire le code et de rendre la classe plus concise.
export class FaceSnap0 {
    location?: string;
  constructor(public title: string,
              public description: string,
              public imageUrl: string,
              public createdAt: Date,
              public snaps: number) {}


              addSnaps():void {
                this.snaps++;
              }

                removeSnaps():void {
                    this.snaps--;
                }
                setLocation(location: string): void {
                    this.location = location;
                }

}


//il s'agit ici de la programmation orientée objet en typescript  on crée  la classe faceSnap avec un constructeur qui prend en paramètre le titre, la description, l'url de l'image, la date de création et le nombre de snaps. Les propriétés sont déclarées comme publiques pour qu'elles puissent être accessibles depuis l'extérieur de la classe.
// export class FaceSnap0 {
//   title: string;
//   description: string;
//   createdDate: Date;
//   snaps: number;
//   imageUrl: string;
// voici le constructeur   utiliser avec le this 

//   constructor(title: string, description: string, imageUrl: string, createdDate: Date, snaps: number) {
//     this.title = title;
//     this.description = description;
//     this.imageUrl = imageUrl;
//     this.createdDate = createdDate;
//     this.snaps = snaps;
//   }
// }

// Cette classe comporte tout ce qu'il faut, et nous permet de générer des objets FaceSnap avec la syntaxe  new FaceSnap().