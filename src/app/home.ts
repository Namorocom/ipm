import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-home',
  imports: [RouterLink, MatIconModule],
  template: `
    <!-- Hero Section -->
    <section class="relative h-[80vh] flex items-center overflow-hidden animate-fade-in-up">
      <div class="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/school-admin/1920/1080?blur=2" 
          alt="Ambiente Escolar" 
          class="w-full h-full object-cover brightness-50"
          referrerPolicy="no-referrer"
        />
      </div>
      
      <div class="section-padding relative z-10 text-white">
        <div class="max-w-3xl">
          <h1 class="text-5xl md:text-7xl mb-6 leading-tight">
            Instituto Médio Politécnico do Maiombe
          </h1>
          <p class="text-xl md:text-2xl mb-8 text-gray-200 font-light">
            Formando profissionais qualificados para o futuro da administração.
          </p>
          <div class="flex flex-wrap gap-4">
            <a routerLink="/cursos" class="btn-primary">
              <mat-icon class="mr-2">school</mat-icon>
              Conheça os nossos cursos
            </a>
            <a routerLink="/inscricao" class="btn-outline !border-white !text-white hover:!bg-white/10">
              <mat-icon class="mr-2">edit_note</mat-icon>
              Faça a sua inscrição
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Brief Presentation -->
    <section class="section-padding animate-fade-in-up animate-delay-200">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 class="text-3xl md:text-4xl text-primary mb-6">Excelência no Ensino Técnico</h2>
          <p class="text-lg text-gray-600 mb-6 leading-relaxed">
            O Instituto Médio Politécnico do Maiombe é uma instituição de referência dedicada à formação de jovens talentos na área administrativa. Nosso compromisso é proporcionar uma educação técnica de alta qualidade, preparando nossos alunos para os desafios do mercado de trabalho moderno.
          </p>
          <div class="grid grid-cols-2 gap-6">
            <div class="p-4 border-l-4 border-primary bg-gray-50">
              <div class="text-2xl font-bold text-primary">10+</div>
              <div class="text-sm text-gray-500 uppercase tracking-wider">Anos de História</div>
            </div>
            <div class="p-4 border-l-4 border-accent bg-gray-50">
              <div class="text-2xl font-bold text-accent">500+</div>
              <div class="text-sm text-gray-500 uppercase tracking-wider">Alunos Formados</div>
            </div>
          </div>
        </div>
        <div class="relative">
          <img 
            src="https://picsum.photos/seed/classroom/800/600" 
            alt="Sala de Aula" 
            class="rounded-2xl shadow-2xl"
            referrerPolicy="no-referrer"
          />
          <div class="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl hidden md:block">
            <div class="flex items-center gap-4">
              <div class="bg-primary/10 p-3 rounded-full">
                <mat-icon class="text-primary">verified</mat-icon>
              </div>
              <div>
                <p class="font-bold">Certificação Oficial</p>
                <p class="text-sm text-gray-500">Reconhecido pelo Ministério</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Courses Preview -->
    <section class="bg-gray-50 py-20 animate-fade-in-up animate-delay-300">
      <div class="section-padding">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl text-primary mb-4">Nossas Áreas de Especialização</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">Oferecemos cursos técnicos focados nas necessidades reais das empresas e organizações.</p>
        </div>
        
        <div class="grid md:grid-cols-4 gap-6">
          @for (course of featuredCourses; track course.title) {
            <div class="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border-t-4 border-primary">
              <mat-icon class="text-primary text-4xl mb-4 h-auto w-auto">{{course.icon}}</mat-icon>
              <h3 class="text-xl mb-2">{{course.title}}</h3>
              <p class="text-sm text-gray-500">{{course.desc}}</p>
            </div>
          }
        </div>
        
        <div class="text-center mt-12">
          <a routerLink="/cursos" class="text-primary font-semibold hover:underline flex items-center justify-center gap-2">
            Ver todos os cursos <mat-icon>arrow_forward</mat-icon>
          </a>
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {
  featuredCourses = [
    { title: 'Administração', icon: 'business', desc: 'Gestão e processos organizacionais.' },
    { title: 'Contabilidade', icon: 'account_balance', desc: 'Finanças e controle patrimonial.' },
    { title: 'Recursos Humanos', icon: 'groups', desc: 'Gestão de pessoas e talentos.' },
    { title: 'Informática de Gestão', icon: 'computer', desc: 'Tecnologia aplicada aos negócios.' },
  ];
}
