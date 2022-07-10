export class Todos{
    index:number; 
    content:string; 
    progress:boolean; 
    
    constructor(index:number, content:string, progress:boolean){
        this.index=index; 
        this.content = content; 
        this.progress=progress; 
    }


}