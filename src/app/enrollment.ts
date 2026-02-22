import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-enrollment',
  imports: [ReactiveFormsModule, MatIconModule, RouterLink],
  template: `
    <section class="bg-primary text-white py-16 animate-fade-in-up">
      <div class="section-padding">
        <h1 class="text-4xl md:text-5xl mb-4">Formulário de Inscrição</h1>
        <p class="text-blue-100 text-lg">Inicie o seu percurso académico no Instituto Médio Politécnico do Maiombe.</p>
      </div>
    </section>

    <section class="section-padding">
      <div class="max-w-4xl mx-auto">
        @if (submitted()) {
          <div class="bg-green-50 border border-green-200 p-12 rounded-3xl text-center animate-fade-in-up">
            <div class="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <mat-icon class="text-green-600 text-4xl h-auto w-auto">check_circle</mat-icon>
            </div>
            <h2 class="text-3xl font-bold text-gray-900 mb-4">Inscrição Prévia Realizada!</h2>
            <p class="text-gray-600 mb-8 text-lg">
              Recebemos os seus dados com sucesso. A nossa equipa da secretaria entrará em contacto consigo nos próximos 2 dias úteis para agendar a entrega da documentação física.
            </p>
            <div class="flex flex-wrap justify-center gap-4">
              <a routerLink="/" class="btn-primary">Voltar ao Início</a>
              <button (click)="resetForm()" class="btn-outline">Nova Inscrição</button>
            </div>
          </div>
        } @else {
          <div class="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 animate-fade-in-up">
            <div class="bg-gray-50 px-8 py-6 border-b border-gray-100">
              <h2 class="text-xl font-bold text-primary flex items-center gap-2">
                <mat-icon>person_add</mat-icon> Dados do Candidato
              </h2>
            </div>
            
            <form [formGroup]="enrollmentForm" (ngSubmit)="onSubmit()" class="p-8 md:p-12 space-y-8">
              <!-- Personal Info -->
              <div class="grid md:grid-cols-2 gap-6">
                <div class="space-y-2">
                  <label for="fullName" class="text-sm font-semibold text-gray-700">Nome Completo</label>
                  <input id="fullName" type="text" formControlName="fullName" class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="Ex: João Manuel">
                </div>
                <div class="space-y-2">
                  <label for="birthDate" class="text-sm font-semibold text-gray-700">Data de Nascimento</label>
                  <input id="birthDate" type="date" formControlName="birthDate" class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all">
                </div>
              </div>

              <div class="grid md:grid-cols-2 gap-6">
                <div class="space-y-2">
                  <label for="gender" class="text-sm font-semibold text-gray-700">Género</label>
                  <select id="gender" formControlName="gender" class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white">
                    <option value="">Seleccione</option>
                    <option value="M">Masculino</option>
                    <option value="F">Feminino</option>
                  </select>
                </div>
                <div class="space-y-2">
                  <label for="biNumber" class="text-sm font-semibold text-gray-700">Nº do Bilhete de Identidade</label>
                  <input id="biNumber" type="text" formControlName="biNumber" class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="000000000XX000">
                </div>
              </div>

              <!-- Contact Info -->
              <div class="grid md:grid-cols-2 gap-6">
                <div class="space-y-2">
                  <label for="phone" class="text-sm font-semibold text-gray-700">Telefone de Contacto</label>
                  <input id="phone" type="tel" formControlName="phone" class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="9XXXXXXXX">
                </div>
                <div class="space-y-2">
                  <label for="email" class="text-sm font-semibold text-gray-700">Email (Opcional)</label>
                  <input id="email" type="email" formControlName="email" class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="exemplo@email.com">
                </div>
              </div>

              <!-- Academic Info -->
              <div class="space-y-6 pt-6 border-t border-gray-100">
                <h2 class="text-xl font-bold text-primary flex items-center gap-2">
                  <mat-icon>school</mat-icon> Opções Académicas
                </h2>
                
                <div class="grid md:grid-cols-2 gap-6">
                  <div class="space-y-2">
                    <label for="course" class="text-sm font-semibold text-gray-700">Curso Pretendido</label>
                    <select id="course" formControlName="course" class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white">
                      <option value="">Seleccione o curso</option>
                      <option value="admin">Técnico de Administração</option>
                      <option value="contab">Técnico de Contabilidade</option>
                      <option value="rh">Técnico de Gestão de Recursos Humanos</option>
                      <option value="inf">Técnico de Informática de Gestão</option>
                    </select>
                  </div>
                  <div class="space-y-2">
                    <label for="period" class="text-sm font-semibold text-gray-700">Período</label>
                    <select id="period" formControlName="period" class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white">
                      <option value="">Seleccione o período</option>
                      <option value="manha">Manhã (07:30 - 12:30)</option>
                      <option value="tarde">Tarde (13:00 - 18:00)</option>
                    </select>
                  </div>
                </div>
              </div>

              <!-- Requirements Check -->
              <div class="bg-blue-50 p-6 rounded-xl space-y-4">
                <p class="text-sm text-blue-800 font-medium">Documentação necessária para entrega física:</p>
                <ul class="text-xs text-blue-700 space-y-2 list-disc pl-4">
                  <li>Cópia do Bilhete de Identidade</li>
                  <li>Certificado da 9ª Classe (Original e Cópia)</li>
                  <li>4 Fotografias tipo passe</li>
                  <li>Atestado Médico e Talão de Recenseamento Militar (para rapazes)</li>
                </ul>
              </div>

              <div class="flex items-center gap-2">
                <input id="terms" type="checkbox" formControlName="terms" class="w-5 h-5 text-primary border-gray-300 rounded focus:ring-primary">
                <label for="terms" class="text-sm text-gray-600">Declaro que as informações acima são verdadeiras e estou ciente da necessidade de entrega física dos documentos.</label>
              </div>

              <button 
                type="submit" 
                [disabled]="enrollmentForm.invalid"
                class="w-full btn-primary justify-center py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <mat-icon class="mr-2">assignment_turned_in</mat-icon>
                Submeter Inscrição Prévia
              </button>
            </form>
          </div>
        }
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Enrollment {
  submitted = signal(false);

  enrollmentForm = new FormGroup({
    fullName: new FormControl('', {validators: [Validators.required], nonNullable: true}),
    birthDate: new FormControl('', {validators: [Validators.required], nonNullable: true}),
    gender: new FormControl('', {validators: [Validators.required], nonNullable: true}),
    biNumber: new FormControl('', {validators: [Validators.required], nonNullable: true}),
    phone: new FormControl('', {validators: [Validators.required], nonNullable: true}),
    email: new FormControl(''),
    course: new FormControl('', {validators: [Validators.required], nonNullable: true}),
    period: new FormControl('', {validators: [Validators.required], nonNullable: true}),
    terms: new FormControl(false, {validators: [Validators.requiredTrue], nonNullable: true}),
  });

  onSubmit() {
    if (this.enrollmentForm.valid) {
      console.log('Enrollment Data:', this.enrollmentForm.value);
      this.submitted.set(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  resetForm() {
    this.enrollmentForm.reset();
    this.submitted.set(false);
  }
}
