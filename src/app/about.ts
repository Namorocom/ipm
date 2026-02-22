import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-about',
  imports: [MatIconModule],
  template: `
    <section class="bg-primary text-white py-20 animate-fade-in-up">
      <div class="section-padding">
        <h1 class="text-4xl md:text-6xl mb-6">Sobre a Instituição</h1>
        <p class="text-xl text-blue-100 max-w-3xl">Conheça a nossa história, os nossos valores e o compromisso que temos com o futuro de Angola.</p>
      </div>
    </section>

    <section class="section-padding animate-fade-in-up animate-delay-200">
      <div class="grid md:grid-cols-2 gap-16">
        <div>
          <h2 class="text-3xl text-primary mb-6">Nossa História</h2>
          <div class="space-y-4 text-gray-600 leading-relaxed">
            <p>
              O Instituto Médio Politécnico do Maiombe nasceu da necessidade de suprir a carência de profissionais técnicos qualificados na região, especialmente nas áreas de gestão e administração.
            </p>
            <p>
              Desde a sua fundação, o instituto tem se destacado pela qualidade do seu corpo docente e pela infraestrutura moderna, focada em proporcionar uma experiência de aprendizagem prática e alinhada com as exigências do mercado.
            </p>
          </div>
          
          <div class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="text-center">
              <div class="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <mat-icon class="text-primary">flag</mat-icon>
              </div>
              <h3 class="font-bold mb-2">Missão</h3>
              <p class="text-sm text-gray-500">Formar técnicos competentes e éticos para o desenvolvimento nacional.</p>
            </div>
            <div class="text-center">
              <div class="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <mat-icon class="text-primary">visibility</mat-icon>
              </div>
              <h3 class="font-bold mb-2">Visão</h3>
              <p class="text-sm text-gray-500">Ser referência em ensino técnico-profissional em Angola.</p>
            </div>
            <div class="text-center">
              <div class="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <mat-icon class="text-primary">favorite</mat-icon>
              </div>
              <h3 class="font-bold mb-2">Valores</h3>
              <p class="text-sm text-gray-500">Ética, Rigor, Inovação e Responsabilidade Social.</p>
            </div>
          </div>
        </div>
        
        <div class="space-y-8">
          <div class="bg-gray-50 p-8 rounded-2xl">
            <h2 class="text-2xl text-primary mb-6">Objetivo da Formação</h2>
            <p class="text-gray-600">
              Nossa formação técnica visa não apenas o conhecimento teórico, mas o desenvolvimento de competências práticas que permitam ao aluno integrar-se imediatamente no mercado de trabalho ou prosseguir para o ensino superior com uma base sólida.
            </p>
          </div>
          
          <div class="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm">
            <h2 class="text-2xl text-primary mb-6">Estrutura Física</h2>
            <ul class="space-y-4">
              <li class="flex items-center gap-3 text-gray-600">
                <mat-icon class="text-accent">check_circle</mat-icon>
                Salas de aula climatizadas e equipadas
              </li>
              <li class="flex items-center gap-3 text-gray-600">
                <mat-icon class="text-accent">check_circle</mat-icon>
                Laboratório de Informática de última geração
              </li>
              <li class="flex items-center gap-3 text-gray-600">
                <mat-icon class="text-accent">check_circle</mat-icon>
                Biblioteca com vasto acervo técnico
              </li>
              <li class="flex items-center gap-3 text-gray-600">
                <mat-icon class="text-accent">check_circle</mat-icon>
                Secretaria e Atendimento ao Aluno
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class About {}
