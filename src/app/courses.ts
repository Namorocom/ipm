import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-courses',
  imports: [MatIconModule],
  template: `
    <section class="bg-gray-900 text-white py-20 animate-fade-in-up">
      <div class="section-padding">
        <h1 class="text-4xl md:text-6xl mb-6">Cursos Disponíveis</h1>
        <p class="text-xl text-gray-400 max-w-3xl">Programas curriculares desenhados para o sucesso profissional imediato.</p>
      </div>
    </section>

    <section class="section-padding animate-fade-in-up animate-delay-200">
      <div class="grid md:grid-cols-2 gap-8">
        @for (course of courses; track course.id) {
          <div class="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all group">
            <div class="h-48 bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <mat-icon class="text-primary text-6xl h-auto w-auto">{{course.icon}}</mat-icon>
            </div>
            <div class="p-8">
              <div class="flex justify-between items-start mb-4">
                <h2 class="text-2xl text-primary">{{course.name}}</h2>
                <span class="bg-accent/10 text-accent text-xs font-bold px-3 py-1 rounded-full uppercase">Nível Médio</span>
              </div>
              
              <p class="text-gray-600 mb-6">{{course.description}}</p>
              
              <div class="grid grid-cols-2 gap-4 mb-8">
                <div class="flex items-center gap-2 text-sm text-gray-500">
                  <mat-icon class="text-primary text-sm">schedule</mat-icon>
                  Duração: {{course.duration}}
                </div>
                <div class="flex items-center gap-2 text-sm text-gray-500">
                  <mat-icon class="text-primary text-sm">location_on</mat-icon>
                  Modalidade: {{course.modality}}
                </div>
              </div>
              
              <div class="border-t pt-6">
                <h3 class="font-bold text-gray-900 mb-3">Saídas Profissionais:</h3>
                <div class="flex flex-wrap gap-2">
                  @for (job of course.outcomes; track job) {
                    <span class="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-md">{{job}}</span>
                  }
                </div>
              </div>
            </div>
          </div>
        }
      </div>
    </section>

    <section class="bg-primary/5 py-20">
      <div class="section-padding text-center">
        <h2 class="text-3xl text-primary mb-6">Interessado em algum curso?</h2>
        <p class="text-gray-600 mb-8 max-w-2xl mx-auto">As inscrições estão abertas para o próximo ano lectivo. Garanta já a sua vaga e comece a construir o seu futuro.</p>
        <button class="btn-primary">Iniciar Inscrição</button>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Courses {
  courses = [
    {
      id: 1,
      name: 'Técnico de Administração',
      icon: 'business_center',
      description: 'Capacita o aluno para gerir processos administrativos, organizar fluxos de trabalho e apoiar a gestão estratégica de empresas.',
      duration: '3 Anos',
      modality: 'Presencial',
      outcomes: ['Assistente Administrativo', 'Secretariado Executivo', 'Gestor de Escritório', 'Apoio à Gestão']
    },
    {
      id: 2,
      name: 'Técnico de Contabilidade',
      icon: 'calculate',
      description: 'Focado no registo de operações financeiras, elaboração de balanços, gestão fiscal e análise de custos organizacionais.',
      duration: '3 Anos',
      modality: 'Presencial',
      outcomes: ['Técnico de Contas', 'Assistente Financeiro', 'Auditor Júnior', 'Consultor Fiscal']
    },
    {
      id: 3,
      name: 'Técnico de Gestão de Recursos Humanos',
      icon: 'person_search',
      description: 'Prepara profissionais para lidar com recrutamento, selecção, processamento de salários e desenvolvimento de capital humano.',
      duration: '3 Anos',
      modality: 'Presencial',
      outcomes: ['Técnico de RH', 'Gestor de Formação', 'Analista de Recrutamento', 'Apoio Social']
    },
    {
      id: 4,
      name: 'Técnico de Informática de Gestão',
      icon: 'devices',
      description: 'Uma ponte entre a tecnologia e os negócios, focando em sistemas de informação, bases de dados e suporte tecnológico à gestão.',
      duration: '3 Anos',
      modality: 'Presencial',
      outcomes: ['Gestor de Sistemas', 'Analista de Dados', 'Suporte Técnico', 'Administrador de BD']
    }
  ];
}
