import Bebe from "./Bebe";

export default class Medico{
    private idMedico: number;
    private crm: number;
    private nome: string;
    private telefoneCel: string;
    private especialidade: string;
    private bebes: Bebe[];

    constructor(idMedico: number, crm: number, nome: string, telefoneCel: string, especialidade: string, bebes: Bebe[]){
        this.idMedico = idMedico;
        this.crm = crm;
        this.nome = nome;
        this.telefoneCel = telefoneCel;
        this.especialidade = especialidade;
        this.bebes = bebes;
    }
}