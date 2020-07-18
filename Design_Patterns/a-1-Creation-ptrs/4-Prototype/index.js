/**
 * Prototype pattern
 */
const dog = {
    race:'CodeTerrier',
    bark:function(){
        console.log(`I don't bark, I talk, my name is the real slim sha.. no I'm sorry, I am a ${this.race}`)
    }
}

const willy = Object.create(dog)
willy.bark()

willy.race = 'ScriptInes';
willy.bark = function(){
    console.log(`I told you before..I don't bark..I am a ${this.race}`)
}
willy.bark()