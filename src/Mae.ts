import Bebe from "./Bebe";

export default class Mae{
    private idMae: number;
    private nome: string;
    private endereco: string;
    private telefone: string;
    private dataNascimento: Date;
    private bebes: Bebe[];

    constructor(idMae: number, nome: string, endereco: string, telefone: string, dataNascimento: Date, bebes: Bebe[]){
        this.idMae = idMae;
        this.nome = nome;
        this.endereco = endereco;
        this.telefone = telefone;
        this.dataNascimento = dataNascimento;
        this.bebes = bebes;
    }
}