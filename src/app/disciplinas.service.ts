import { Injectable } from '@angular/core';

interface Disciplina {
  title: string;
  dia: string;
  hora: string;
}

@Injectable()
export class DisciplinasService {
  lista: Array<Disciplina> = [
    { title: 'Desenvolvimento para Dispositivos Móveis I', dia: 'Segunda-Feira', hora: '19:30' },
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
