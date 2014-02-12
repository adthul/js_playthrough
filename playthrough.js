function Playthrough( game, genre, character, players ) {
  this.game = game;
  this.genre = genre;
  this.character = character;
  this.players = players;
}

Playthrough.prototype.toString = function () {
  return "This playthrough is of " + this.game + ", a fantastic " + this.genre + ". " + "This playthrough is being done with a group of " + this.players + ", and you have chosen to be " + this.character + ".";
};

var borderlands = new Playthrough( "Borderlands 1", "shooter/RPG", "Brick, the berserker", 4 );
var halo = new Playthrough( "Halo 1", "shooter", "Master Chief", 3 );

console.log( borderlands.toString() );
console.log( halo.toString() );
