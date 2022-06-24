import agendaTelefones from "./agendaTelefones"
import Documento from "./documento"
import Endereco from "./endereco"
import Telefone from "./telefone"

export default class Cliente {
    public nome: string
    public nomeSocial: string
    public dataNascimento: Date
    public dataCadastro: Date
    public telefones: Telefone[] = []
    public agenda: agendaTelefones
    public endereco: Endereco
    public documentos: Documento[] = []
    public dependentes: Cliente[] = []
    public titular: Cliente


}