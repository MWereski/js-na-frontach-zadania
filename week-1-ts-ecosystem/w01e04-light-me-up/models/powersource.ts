export class PowerSource {
    private energySupply = 100

    consume(energy: number) {
        if(this.energySupply <= 0) throw "No more Energy in the Power Source!"
        if(energy > this.energySupply) throw `Not enough energy: Energy left: ${this.energySupply} : Energy wanted: ${energy}`

        this.energySupply -= energy
    }
}
