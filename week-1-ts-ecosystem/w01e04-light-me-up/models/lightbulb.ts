import {PowerSource} from "./powersource";

export class LightBulb {
    protected readonly powerConsumption = 20

    lightUp(ps: PowerSource){
        try{
            ps.consume(this.powerConsumption)
            console.log("BULB SHINE LIKE DIAMOND!")
        }catch (e){
            console.log(`Error of lightning bulb up: ${e}`)
        }
    }
}