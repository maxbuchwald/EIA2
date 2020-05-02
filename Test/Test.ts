function makeid(length: number): string {
    let result: string           = " ";
    let characters: string       = "0123456789";
    let charactersLength: number = characters.length;
    for ( let i: number = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }
 
 console.log(makeid(5));