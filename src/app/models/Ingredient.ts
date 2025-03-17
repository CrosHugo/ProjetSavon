export class Ingredient {
    id: number | null = null;
    nom: string = '';
    type: string = ''; // Huile, soude, eau, etc.

    constructor(nom: string, type: string) {
        this.nom = nom;
        this.type = type;
    }
}
