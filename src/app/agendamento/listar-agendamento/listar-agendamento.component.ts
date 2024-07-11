import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import localesBR from '@fullcalendar/core/locales/pt-br';
import bootstrapPlugin from '@fullcalendar/bootstrap';
import { MatInputModule } from '@angular/material/input';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServicoModel } from '../../_models/ServicoModel';
import { map, Observable, startWith } from 'rxjs';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-agendamento',
  templateUrl: './listar-agendamento.component.html',
  styleUrls: ['./listar-agendamento.component.css'],
})
export class ListarAgendamentoComponent implements OnInit {
  servico: ServicoModel = new ServicoModel();
  servicos: ServicoModel[] = [];
  nomes: string[] = [];
  filteredOptions: Observable<ServicoModel[]> = new Observable<
    ServicoModel[]
  >();
  servicoControl = new FormControl();
  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin, bootstrapPlugin, interactionPlugin],
    themeSystem: 'Litera',
    // initialView: 'dayGridMonth',
    weekends: false,
    locale: localesBR,
    //timeZone: 'America/Sao_Paulo',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,dayGridWeek,dayGridDay',
    },
    editable: true,

    events: [{ title: 'Meeting', start: new Date(2024, 6, 9, 8, 0, 0) }],
  };

  constructor() {}

  ngOnInit() {
    console.log(new Date(2024, 6, 9, 8, 0, 0));
    this.listarServicos();

    this.filteredOptions = this.servicoControl.valueChanges.pipe(
      startWith(''),
      map((value) => (typeof value === 'string' ? value : value.nome)),
      map((nome) => (nome ? this._filter(nome) : this.servicos.slice()))
    );

    console.log('Serviço seleciona é ' + this.servicoControl.value);
  }

  listarServicos() {
    let servico1 = new ServicoModel();
    servico1.id = 1;
    servico1.nome = 'Cardiologia';
    this.servicos.push(servico1);
    // this.listarServicos = [servico1]
    //this.listarServicos.apply(servico1)

    let servico2 = new ServicoModel();
    servico2.id = 2;
    servico2.nome = 'Angiologista';
    this.servicos.push(servico2);

    //this.listarServicos.apply(servico2)

    let servico3 = new ServicoModel();
    servico3.id = 3;
    servico3.nome = 'Reumatologista';
    this.servicos.push(servico3);
    //this.listarServicos.apply(servico3)

    console.log(this.servicos);
  }

  private _filter(value: string): ServicoModel[] {
    console.log('filter');
    console.log(value);
    // const filterValue = "";
    const filterValue = value != null ? value.toLowerCase() : '';

    return this.servicos.filter((servico) =>
      servico.nome.toLowerCase().includes(filterValue)
    );
  }
  populateForm(event: MatAutocompleteSelectedEvent) {
    //event.source
    console.log(event);
  }

  displayFn(option: ServicoModel): string {
    return option ? option.nome : '';
  }
}
