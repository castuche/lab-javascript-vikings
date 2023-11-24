// Soldier
class Soldier {
    constructor(health,strength){
        this.health=health;
        this.strength=strength;
    }
    attack(){
        return this.strength;
    }
    receiveDamage(receivedDamage){
        this.health-=receivedDamage; 
    }
}

// Viking
class Viking extends Soldier {
    constructor(name,health,strength){
        super(health,strength);
        this.name=name;
    }
    receiveDamage(receivedDamage){
        this.health-=receivedDamage;
        if  (this.health>0){
            return `${this.name} has received ${receivedDamage} points of damage`
        }
        else { return `${this.name} has died in act of combat`}
    }
    battleCry(){
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier {
    attack (){
        return this.strength;
    }
    receiveDamage(receivedDamage){
        this.health-=receivedDamage;
        if  (this.health>0){
            return `A Saxon has received ${receivedDamage} points of damage`
        }
        else { return `A Saxon has died in combat`} 
    }
}

// War
class War {
    constructor(){
        this.vikingArmy=[];
        this.saxonArmy=[];
    }
    addViking(vikingObject){
        this.vikingArmy.push(vikingObject);
    }

    addSaxon(saxonObject){
        this.saxonArmy.push(saxonObject);
    }
    vikingAttack(){
        let randomSaxonNumber=Math.floor(Math.random()*this.saxonArmy.length);
        let randomVikingNumber=Math.floor(Math.random()*this.vikingArmy.length);
        const saxon=this.saxonArmy[randomSaxonNumber];
        const viking=this.vikingArmy[randomVikingNumber]; 
        const result=saxon.receiveDamage(viking.strength);
        if  (saxon.health<=0){
           this.saxonArmy.splice(randomSaxonNumber,1);
        } 
        return result;
    }
    saxonAttack(){
        let randomSaxonNumber=Math.floor(Math.random()*this.saxonArmy.length);
        let randomVikingNumber=Math.floor(Math.random()*this.vikingArmy.length);
        const saxon=this.saxonArmy[randomSaxonNumber];
        const viking=this.vikingArmy[randomVikingNumber]; 
        const result=viking.receiveDamage(saxon.strength);
        if  (viking.health<=0){
           this.vikingArmy.splice(randomVikingNumber,1);
        } 
        return result;
    }
    
    // Generic attack function alternative
    attack (){
        let randomSaxonNumber=Math.floor(Math.random()*this.saxonArmy.length);
        let randomVikingNumber=Math.floor(Math.random()*this.vikingArmy.length);

        const saxon=this.saxonArmy[randomSaxonNumber];
        const viking=this.vikingArmy[randomVikingNumber]; 

        let result;
        if(Math.random()<0.5){
            result=viking.receiveDamage(saxon.strength);
            if  (viking.health<=0){
               this.vikingArmy.splice(randomVikingNumber,1);
            }   
        }
        else{result=saxon.receiveDamage(viking.strength);
            if  (saxon.health<=0){
               this.saxonArmy.splice(randomSaxonNumber,1);
            } }
        return result;
    }
    
    showStatus(){
        if (this.saxonArmy.length===0){
            return "Vikings have won the war of the century!"
        }
        else if (this.vikingArmy.length===0){
            return "Saxons have fought for their lives and survived another day..."
        }
        else {return"Vikings and Saxons are still in the thick of battle."}
    }
    }

