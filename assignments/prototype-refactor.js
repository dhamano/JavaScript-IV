/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

/*
function GameObject(attrs) {
  this.createdAt = attrs.createdAt;
  this.name = attrs.name;
  this.dimensions = attrs.dimensions;
}
GameObject.prototype.destroy = function() {
  return `${this.name} was removed from the game.`;
}
//*/

class GameObject {
  constructor(attrs) {
    this.createdAt = attrs.createdAt;
    this.name = attrs.name;
    this.dimensions = attrs.dimensions;
  }
  destroy() {
    return `${this.name} was removed from the game.`;
  }
}

/*
function CharacterStats(attrs) {
  GameObject.call(this, attrs);
  this.healthPoints = attrs.healthPoints;
}
CharacterStats.prototype = Object.create(GameObject.prototype);
CharacterStats.prototype.takeDamage = function() {
  return `${this.name} took damage.`;
}
//*/
class CharacterStats extends GameObject {
  constructor(attrs) {
    super(attrs);
    this.healthPoints = attrs.healthPoints;
  }
  takeDamage() {
    return `${this.name} took damage.`;
  }
}

/*
function Humanoid(attrs) {
  CharacterStats.call(this, attrs);
  this.team = attrs.team;
  this.weapons = attrs.weapons;
  this.language = attrs.languag;
}
Humanoid.prototype = Object.create(CharacterStats.prototype);
Humanoid.prototype.greet = function() {
  return `${this.name} offers a greeting in ${this.language}.`;
}
//*/
class Humanoid extends CharacterStats {
  constructor(attrs) {
    super(attrs);
    this.team = attrs.team;
    this.weapons = attrs.weapons;
    this.language = attrs.languag;
  }
  greet() {
    return `${this.name} offers a greeting in ${this.language}.`;
  }
}

///*
  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });

  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
//*/

  // Stretch task: 
  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
  // * Give the Hero and Villains different methods that could be used to remove
   //  health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villain and one a hero and fight it out with methods!

  function determineDamager(target) {
    let damage = Math.floor(Math.random() * Math.ceil(target.healthPoints+1));
    return ( Math.ceil(damage) );
  }
/*
  function Villain(attrs) {
    Humanoid.call(this, attrs);
    this.isVillan = attrs.isVillan;
  }
  Villain.prototype = Object.create(Humanoid.prototype);
  Villain.prototype.assault = function attack(obj) {
    let damage = determineDamager(obj);
    obj.healthPoints -= damage;
    if(obj.healthPoints <= 0) { return ( [ `${this.name} murders ${obj.name}!`, obj.destroy() ] ); }
    if ( damage <= 0 ) { return ( `${this.name} stubs his toe and curses!` ); }
    if (damage === 1) { return ( `${obj.name} is assailed for ${damage} point of damage.` ); }
    return ( `${obj.name} is assailed for ${damage} points of damage.` );
  }
//*/
  class Villain extends Humanoid {
    constructor(attrs) {
      super(attrs);
      this.Villain = attrs.Villain;
    }
    assault(obj) {
      let damage = determineDamager(obj);
      obj.healthPoints -= damage;
      if(obj.healthPoints <= 0) { return ( [ `${this.name} murders ${obj.name}!`, obj.destroy() ] ); }
      if ( damage <= 0 ) { return ( `${this.name} stubs his toe and curses!` ); }
      if (damage === 1) { return ( `${obj.name} is assailed for ${damage} point of damage.` ); }
      return ( `${obj.name} is assailed for ${damage} points of damage.` );
    }
  }

/*
  function Hero(attrs) {
    Humanoid.call(this, attrs);
    this.isHero = attrs.isHero;
  }
  Hero.prototype = Object.create(Humanoid.prototype);
  Hero.prototype.attack = function attack(obj) {
    let damage = determineDamager(obj);
    obj.healthPoints -= damage;
    if(obj.healthPoints <= 0) { return ( [ `${this.name} defeats ${obj.name}!`, obj.destroy() ] ); }
    if ( damage <= 0 ) { return ( `${this.name} slips and falls!` ); }
    if ( damage === 1) { return ( `${obj.name} is hit for ${damage} point of damage.` ); }
    return ( `${obj.name} is hit for ${damage} points of damage.` );
  }
//*/
  class Hero extends Humanoid {
    constructor(attrs) {
      super(attrs);
      this.isHero = attrs.isHero;
    }
    attack(obj) {
      let damage = determineDamager(obj);
      obj.healthPoints -= damage;
      if(obj.healthPoints <= 0) { return ( [ `${this.name} defeats ${obj.name}!`, obj.destroy() ] ); }
      if ( damage <= 0 ) { return ( `${this.name} slips and falls!` ); }
      if ( damage === 1) { return ( `${obj.name} is hit for ${damage} point of damage.` ); }
      return ( `${obj.name} is hit for ${damage} points of damage.` );
    }
  }

  const necromancer = new Villain({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 50,
    name: 'The Six Fingered Man',
    team: 'Kingdom of Florin',
    weapons: [
      'Rapier',
      'Throwing Dagger',
    ],
    language: 'Common Tongue',
  });

  const paladin = new Hero({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 50,
    name: 'Westley',
    team: 'Florin',
    weapons: [
      'Rapier'
    ],
    language: 'Common Tongue',
  });

  console.log(necromancer.assault(paladin));
  console.log(necromancer.assault(mage));
  console.log(necromancer.assault(archer));
  console.log(necromancer.assault(swordsman));
  console.log(paladin.attack(necromancer));
  console.log(paladin.attack(mage));
  console.log(paladin.attack(archer));
  console.log(paladin.attack(swordsman));
