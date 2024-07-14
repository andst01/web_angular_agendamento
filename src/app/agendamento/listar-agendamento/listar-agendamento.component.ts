import { ServicoModel } from './../../_models/ServicoModel';
import { Component, OnInit } from '@angular/core';
import { CalendarOptions, DatesSetArg } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import localesBR from '@fullcalendar/core/locales/pt-br';
import bootstrapPlugin from '@fullcalendar/bootstrap';
import { MatInputModule } from '@angular/material/input';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import timeGridPlugin from '@fullcalendar/timegrid';
import resourceTimeGridPlugin from '@fullcalendar/resource-timegrid';


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

  selectProfessionals = [
    { id: 1, nome: 'Ana' },
    { id: 2, nome: 'Beatriz' },
    { id: 3, nome: 'João' },
  ];

  filteredProfessionals = this.selectProfessionals;
  public filterProfessionalsValue = "";
  selectedProfessionals = {id: 0, nome: ""};

  calendarOptions: CalendarOptions = {
    plugins: [bootstrapPlugin, interactionPlugin, resourceTimeGridPlugin, dayGridPlugin],
    initialView: 'timeGridWeek',
    themeSystem: 'bootstrap',
    datesSet: this.handleDatesSet.bind(this),
    // initialView: 'dayGridMonth',
    slotMinTime: '08:00',
    slotMaxTime : '19:00',
    weekends: true,
    locale: localesBR,
    hiddenDays: [0],
    startParam: '08:00',
    headerToolbar: {
      left: 'prev,next',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay' //'dayGridMonth,dayGridWeek,dayGridDay',
    },
    editable: true,
    allDaySlot: false,
    dayMaxEvents: false,
    events: [{ title: 'Meeting', date:'09/07/2024', start: new Date(2024, 6, 9, 8, 0, 0), end: new Date(2024, 6, 9, 8, 30, 0), color: 'red'}],
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

    this.filteredProfessionals = this.selectProfessionals;
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
    //event.option.
    console.log(event.option.value);
  }

  handleDatesSet(arg: DatesSetArg) {
    if (arg.view.type === 'timeGridWeek') {
      console.log(arg);
      console.log('Visualização timeGridWeek acionada');
      // Aqui você pode realizar ações quando a visualização timeGridWeek é acionada
    }
  }

  displayFn(servico: ServicoModel) : string {
      return servico && servico.nome ? servico.nome : '';
  }

  getfilterProfessionals(): void {
    const filterValueLower = this.filterProfessionalsValue.toLowerCase();
    this.filteredProfessionals = this.selectProfessionals.filter(item =>
      item.nome.toLowerCase().includes(filterValueLower)
    );
  }

  // https://stackoverflow.com/questions/48442794/implement-a-search-filter-for-the-mat-select-component-of-angular-material
}
