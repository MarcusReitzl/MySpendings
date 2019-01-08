export class KategorieService{
    
    
    categorie: string [] = [
    "Lebensmittel",
    "Reinigungsmaterial"

  ]

onAddCategorie(inputKategorie){
    this.categorie.push(inputKategorie);
}

getCategorie(){
    return this.categorie.slice();
}
  
}