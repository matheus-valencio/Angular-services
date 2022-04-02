import { Injectable } from '@angular/core';

interface Disciplina {
  title: string;
  dia: string;
  hora: string;
}

@Injectable()
export class DisciplinasService {
  lista: Array<Disciplina> = [
    {
      title: 'Desenvolvimento para Dispositivos Móveis I',
      dia: 'Segunda-Feira',
      hora: '19:00 - 22:30',
    },
    { title: 'Inglês V ', dia: 'Terça-Feira', hora: '19:30 - 20:40' },
    {
      title: 'Negócios e Marketing e Eletrônicos',
      dia: 'Quarta-Feira',
      hora: '19:00 - 22:30',
    },
    {
      title: 'Desenvolvimento para Servidores II',
      dia: 'Quinta-Feira',
      hora: '19:00 - 22:30',
    },
    {
      title: 'Tópicos Especiais em Sistemas para Internet II',
      dia: 'Sexta-Feira',
      hora: '19:00 - 22:30',
    },
    {
      title: 'Projeto de Prototipagem e Testes de Usabilidade',
      dia: 'Sábado',
      hora: '8:00 - 11:30',
    },
    {
      title: 'Estágio Supervisionado em Sistemas para Internet',
      dia: '',
      hora: '',
    },
    {
      title: 'Projeto de Trabalho de Graduação em Sistemas para Internet I',
      dia: 'Sábado',
      hora: '11:30 - 13:10',
    },
  ];
  constructor() {}

  getLista() {
    return this.lista;
  }
  add(title: string, dia: string, hora: string) {
    this.lista.push({ title, dia, hora });
  }
  remove(index: number) {
    this.lista.splice(index, 1);
  }
}
