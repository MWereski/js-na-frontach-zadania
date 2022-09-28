/**
 * Zasady co do pliku:
 *
 * Możesz dowolnie modyfikować zawartość tego pliku,
 * całość programu musi jednak działać tak jak do tej pory !
 *
 * */
import {User} from "./user";
import {Address} from "./address";

const user = new User('Andy', 10, 'andy@mail-me-tommorow.com', new Address('Strange Alley', 23))

const isAdult = user.hasGivenAge(18)

console.log(`User ${user.name} is ${isAdult ? 'adult' : 'minor'}`)
console.log(`and has${user.hasAddress() ? '' : ' no'} address`)