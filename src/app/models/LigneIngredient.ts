import { Ingredient } from "./Ingredient";

export class LigneIngredient {
    id: number | null = null;
    ingredient: Ingredient;
    quantite: number = 0;

    constructor(ingredient: Ingredient, quantite: number) {
        this.ingredient = ingredient;
        this.quantite = quantite;
    }
}
