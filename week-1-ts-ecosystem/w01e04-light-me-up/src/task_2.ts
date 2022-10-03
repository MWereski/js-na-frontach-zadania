import {PowerSource} from "../models/powersource";
import {LightBulb} from "../models/lightbulb";

const ps = new PowerSource()

const bulb = new LightBulb()

shine(bulb, ps, 6)

function shine(bulb: LightBulb, powerSource: PowerSource, seconds: number){
    for(let i = 0;i < seconds; i++){
        setTimeout(() => {
            try{
                bulb.lightUp(powerSource)
            }catch(e){
                console.log(`Bulb Error: ${e}`)
            }
        }, i * 1000)
    }
}