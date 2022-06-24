import Prototipo from "../interfaces/prototipo";
import Telefone from "./telefone";


export default class agendaTelefones implements Prototipo{
    public telefones: Telefone[] = []

    public clonar(): Prototipo {
        let agenda = new agendaTelefones()
        agenda.telefones = this.telefones;
        return agenda;   
    }
}


