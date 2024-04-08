console.log('Hello world !')
/*
let chiffre = 2
let nombre = 10
resultat = 0

if (nombre=! 0){
    resultat = nombre / chiffre
    console.log(resultat)
} else {
    console.log('impossible')
}

let i = 0
while(i<10){
    console.log(i)
    i++
}



 Sujet exo 2

Votre personnage à un nom, une quantité d’argent, et souhaite acheter un 
produit dans une boutique, qui possède une quantité limité et un prix 
défini.
La console doit afficher le nombre de produit qu’il a pu acheter, l’argent qui 
lui reste et si le produit est en rupture de stock ou non à la fin.

let nom_perso = 'Michel'
let qte_argent = 15
let prix_pain = 1.2
let stock_pain = 13
let nb_achete = 0

while (qte_argent > 1){
    if (stock_pain > 0){
        if (qte_argent >= prix_pain){
            nb_achete = nb_achete+1
            stock_pain = stock_pain-1
            qte_argent = qte_argent-prix_pain
        }
    }
    console.log(nom_perso, 'a achete ', nb_achete, 'pains, il lui reste ', qte_argent, 'au magasin il reste ', stock_pain, 'de pains.' )
}
hello
tableaux = listes
let fruit = ['pomme', 'poire', 'banane']

Créer une classe puis initialiser deux instances de cette classe.
Chaque personnage possède un nom, des points de vie, une attaque, une 
précision et deux fonctions : une pour Attaquer et une pour la Précision
Dans une boucle, réalisez les attaques des deux combattants en testant bien s’ils 
touchent leur adversaire et en diminuant ses points de vie si c’est le cas.
Utiliser le console.log() pour envoyer des messages dans la console à chaque 
étape, suivre le combat et connaitre le vainqueur à la fin.

Vérifier la précision :
Générer un nombre aléatoire avec math.random() (qui retourne un décimal 
entre 0 et 1), si ce nombre est inférieur à la précision du combattant alors le 
celui ci peut attaquer
*/

class Guerrier {
    constructor (name, pv, attack, precision){
        this.name = name
        this.pv = pv
        this.attack = attack
        this.precision = precision
    }
    getAttack1(){
        if (guerrier1.precision > Math.random()){
            guerrier2.pv = guerrier2.pv - guerrier1.attack
            console.log('le lion réussi son attaque')
        }else{
            console.log('le lion rate son attaque')
        }
    }

    getAttack2(){
        if (guerrier2.precision > Math.random()){
            guerrier1.pv = guerrier1.pv - guerrier2.attack
            console.log('le lapin réussi son attaque')
        }else{
            console.log('le lapîn rate son attaque')
        }
    }
}

// creation des combattants
let guerrier1 = new Guerrier('Lion', 3, 1,  0.6);
console.log(guerrier1)

let guerrier2 = new Guerrier('Lapin', 5, 1, 0.5);
console.log(guerrier2)


//combat

//let abc = 0 <= permet de vérifer
while(guerrier1.pv > 0 && guerrier2.pv > 0){
    guerrier1.getAttack1()
    console.log('vie du lion ',guerrier1.pv)
    console.log('vie du lapin ',guerrier2.pv)

    guerrier2.getAttack2()
    console.log('vie du lion ', guerrier1.pv)
    console.log('vie du lapin ',guerrier2.pv)

    if (guerrier1.pv == 0){
        console.log('le', guerrier2.name, 'a gagné !')
    }

    if (guerrier2.pv == 0){
        console.log('le', guerrier1.name, 'a gagné !')
    }
    /*if (abc == 5){
        break
    }
    abc++ pareil */
    
}












