import {PowerSource} from "../models/powersource";
import {LightBulb} from "../models/lightbulb";


const ps = new PowerSource()

const bulb1 = new LightBulb()
const bulb2 = new LightBulb()
const bulb3 = new LightBulb()
const bulb4 = new LightBulb()
const bulb5 = new LightBulb()
const bulb6 = new LightBulb()

shine(bulb1, ps)
shine(bulb2, ps)
shine(bulb3, ps)
shine(bulb4, ps)
shine(bulb5, ps)
shine(bulb6, ps)

function shine(bulb: LightBulb, powerSource: PowerSource){
    try{
        bulb.lightUp(powerSource)
    }catch (e){
        console.log("BULB Error: " + e)
    }
}