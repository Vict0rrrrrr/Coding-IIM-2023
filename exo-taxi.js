class John {
    constructor() {
        this.sanity = 10;
        this.feux = 30;
        this.wejdene = 0;
        this.sons = ['Spectre - Alan Walker', 'Give it Away - Red Hot Chili Peppers', 'Welcome to the Jungle - Guns N Roses', 'Bombtrack - Rage Against The Machine', 'Anissa - Wejdene'];
    }

    anissa() {
        this.sanity -= 1;
        this.wejdene += 1;
        console.log('Aïe! Encore "Anissa" de Wejdene... John laisse la pire note à ce chauffeur et commande IMMÉDIATEMENT un autre taxi. Sa santé mentale chute à ' + this.sanity+'.');
    }

    debut() {
        console.log('Le trajet débute. Il reste 30 feux avant que John arrive chez lui.')
//DEBUT DE LA BOUCLE
        while (this.feux > 0) {
            let x = Math.floor(Math.random() * 5);
            this.feux -= 1;
//SI CHANSON ACTUELLE = PRECEDENTE
            if ((y === x) && (y != 4)) {
                console.log('Encore '+this.sons[x]+' ! Il reste '+this.feux+' feux avant la fin du trajet.');
            }
//SINON
            else {
                console.log('Il reste ' + this.feux + ' feux avant la fin du trajet. La chanson jouée à la radio est '+this.sons[x]+'.');
            }
//SI CHANSON JOUEE = ANISSA ET QUE CHANSON PRECEDENTE = ANISSA
            if (x === 4) {
                if (y==4) {
                    this.sanity -= 1;
                    console.log('Encore Anissa de Wejdene ? John a décidement peu de chance... Sa santé mentale chute à '+this.sanity+'.')
                }
//SINON
                else {
                    this.anissa();
                }
//SI PDT TRAJET SANTE MENTALE A ZERO = FINITO
            if (this.sanity === 0) {
                console.log('EXPLOSION! John a entendu Anissa de Wejdene une fois de trop, il a explosé et ne rentrera jamais chez lui... Maudite sois-tu Wejdene...');
                break;
                }
            }
            y = x 
        }
//FIN DE LA BOUCLE

//SI ANISSA JOUE 0 FOIS
    if (this.sanity === 10) {
            console.log('Quelle chance ! John a réussi à sauver ses oreilles de Wejdene ! Il a gardé le même taxi tout du long !');
    }
//SINON    
        else {
            console.log('Enfin la fin du calvaire ! Après ' + this.wejdene + ' changements de taxi causés par Wejdene, John est enfin chez lui.');
        }
    }  
} 

y = 5
let johnObjet = new John();
johnObjet.debut();