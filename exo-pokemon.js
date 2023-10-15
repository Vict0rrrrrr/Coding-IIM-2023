class Pokemon {
    constructor(Nom, Attaque, Défense, PV, luck) {
        this.Nom = Nom
        this.Attaque = Attaque
        this.Défense = Défense
        this.PV = PV
        this.luck = luck
    }

    isLucky() {
        if(Math.random() < this.luck) {
            return true 
        } else {
            return false
        }
    }

    attaquePokemon(cible) {
        if(cible.isLucky()) {
            cible.PV = cible.PV - (this.Attaque-this.Défense)
            console.log(cible.Nom + " attaque " + this.Nom + " ! " + this.Nom + " est maintenant à " + cible.PV + "pv !");
        } else {
            console.log(cible.Nom + " esquive l'attaque de " + this.Nom + " !")
        }
        
    }
}

let Marshadow = new Pokemon("Marshadow", 50, 10, 72, 0.5);
let Amphinobi = new Pokemon("Amphinobi", 49, 20, 90, 0.7);

console.log("Le combat opposant Amphinobi à Marshadow va commencer ! Prêts ? C'est parti !")

while(Marshadow.PV > 0 && Amphinobi.PV > 0) {
    Marshadow.attaquePokemon(Amphinobi);
    Amphinobi.attaquePokemon(Marshadow);
}
    
if(Amphinobi.PV <= 0) {
    console.log("Amphinobi est K.O ! Marshadow remporte le combat !")
}

if(Marshadow.PV <= 0) {
    console.log("Marshadow est K.O ! Amphinobi remporte le combat !")
}


