

class Perso {
    constructor(prenom, role, survavibilite, kamikaze) {
        this.prenom = prenom
        this.role = role;
        this.survavibilite = survavibilite;
        this.kamikaze = kamikaze;
    }
}

class SerialKiller {
    constructor(pv) {
        this.pv = pv;
    }

    attack(heros) {
        let victime = heros[Math.floor(Math.random() * heros.length)];
        let frappe = Math.random();
        if (frappe > victime.survavibilite) {
            let dernier_coup = Math.random();
            if (dernier_coup > victime.kamikaze) {
                this.pv -= 15;
                console.log(victime.prenom + victime.role + " meurt des mains de Jason, mais lui enlève 15 points de vie dans sa chute.");
                heros.splice(heros.indexOf(victime), 1);
            } else {
                heros.splice(heros.indexOf(victime), 1);
                console.log(victime.prenom + victime.role + " meurt des mains de Jason...");
            }
            nbmorts.push(victime);
        } else {
            this.pv -= 10;
            console.log(victime.prenom + victime.role + " esquive l'attaque de Jason et lui inflige 10 points de dégâts !");
        }
    }
}

let prenoms = ["Victor le ", "Maguelone la ", "Gaëtan le ", "Lola la ", "Anthony le ", "Gabriel le ", "Thomas le ", "Poscar le "];
let roles = ["gosse de riche", "populaire", "nerd", "fan de metal", "go muscu"]

function attribuerprenom(prenoms) {
    let x = Math.floor(Math.random() * prenoms.length)
    let prenom = prenoms[x]
    prenoms.splice(x, 1)
    return prenom
    }

function attribuerrole(roles) {
    let y = Math.floor(Math.random() * roles.length)
    let role = roles[y]
    roles.splice(y, 1)
    return role
    }

let heros1 = new Perso(attribuerprenom(prenoms), attribuerrole(roles), 0.8, 0.2);
let heros2 = new Perso(attribuerprenom(prenoms), attribuerrole(roles), 0.5, 0.5);
let heros3 = new Perso(attribuerprenom(prenoms), attribuerrole(roles), 0.6, 0.5);
let heros4 = new Perso(attribuerprenom(prenoms), attribuerrole(roles), 0.3, 0.9);
let heros5 = new Perso(attribuerprenom(prenoms), attribuerrole(roles), 0.65, 0.4);

let heros = [heros1, heros2, heros3, heros4, heros5];

let Jason = new SerialKiller(100);

let nbmorts = []; 

while (Jason.pv > 0 && heros.length > 0) {
    Jason.attack(heros);
    }

if (Jason.pv <= 0) {
    console.log("Les héros se sont débarassés de Jason, mais le bilan des victimes s'élève à " + nbmorts.length + ".");
}

if (heros.length === 0) {
    console.log("Tous les héros sont morts, tandis que Jason est vivant et empochera des millions grâce à son prochain film...");
}

