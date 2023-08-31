export default class Bebe{
    private id: number;
    private nome: string;
    private dataNascimento: Date;
    private pesoNascimento: number;
    private altura: number;
    private idMae: number;
    private nomeMae: string;
    private idMedico: number;
    private nomeMedico: string;

    constructor(id: number,nome: string, dataNascimento: Date, pesoNascimento: number, altura: number,idMae: number, nomeMae: string, idMedico: number, nomeMedico: string){
        this.id = id;
        this.nome = nome;
        this.dataNascimento = dataNascimento;
        this.pesoNascimento = pesoNascimento;
        this.altura = altura;
        this.idMae = idMae;
        this.nomeMae = nomeMae;
        this.idMedico = idMedico;
        this.nomeMedico = nomeMedico;
    }
}
