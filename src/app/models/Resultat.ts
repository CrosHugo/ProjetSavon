export class Resultat {
    id: number | null = null;
    type: string = ''; // Exemple : pH, dureté, etc.
    valeur: number = 0;

    constructor(type: string, valeur: number) {
        this.type = type;
        this.valeur = valeur;
    }
}
