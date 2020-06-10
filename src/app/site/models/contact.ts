export class Contact {
    id?:number;
    nom :string;
    email:string;
     message:string;
    // type:String;
    // picByte:Byte[];
    constructor(id:number,nom:string,email:string,message: string){
        this.id=id;
         this.nom=nom;
         this.email=email;
         this.message=message
     }
 
}
