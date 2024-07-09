import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import localesBR from '@fullcalendar/core/locales/pt-br';
import bootstrapPlugin from '@fullcalendar/bootstrap';

@Component({
  selector: 'app-agendamento',
  templateUrl: './listar-agendamento.component.html',
  styleUrls: ['./listar-agendamento.component.css']
})
export class ListarAgendamentoComponent implements OnInit {
  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin, bootstrapPlugin, interactionPlugin],
    themeSystem: 'Litera',
   // initialView: 'dayGridMonth',
    weekends: false,
    locale: localesBR,
    timeZone: 'America/Sao_Paulo',
    headerToolbar:{
      left: 'prev,next today',
      center: 'title',
       right: 'dayGridMonth,dayGridWeek,dayGridDay'
    },
    events: [
      { title: 'Meeting', start: new Date() }
    ]
  };



  constructor() { }

  ngOnInit() {
  }

}
