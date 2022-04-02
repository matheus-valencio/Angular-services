import { Injectable } from '@angular/core';

interface Disciplina {
  title: string;
  dia: string;
  hora: string;
}

@Injectable()
export class DisciplinasService {
  lista: Array<Disciplina> = [
    { title: 'Materia', dia: 'segunda', hora: '19:30' },
  ];
  constructor() {}
}
