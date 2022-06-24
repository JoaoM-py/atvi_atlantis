import Prototipo from "../interfaces/prototipo"

export default class Telefone implements Prototipo{
    public ddd: string
    public numero: string

    public clonar(): Prototipo {
        let telefone = new Telefone()
        this.ddd
        this.numero
        return telefone
    }
}