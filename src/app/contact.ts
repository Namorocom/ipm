import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, MatIconModule],
  template: `
    <section class="bg-gray-100 py-20">
      <div class="section-padding">
        <div class="grid md:grid-cols-2 gap-16">
          <!-- Contact Info & Location -->
          <div>
            <h1 class="text-4xl text-primary mb-8">Entre em Contacto</h1>
            <p class="text-gray-600 mb-12 text-lg">Estamos aqui para esclarecer todas as suas dúvidas sobre cursos, inscrições e funcionamento do instituto.</p>
            
            <div class="space-y-8">
              <div class="flex gap-4">
                <div class="bg-primary text-white p-3 rounded-lg h-fit">
                  <mat-icon>location_on</mat-icon>
                </div>
                <div>
                  <h3 class="font-bold text-gray-900">Localização</h3>
                  <p class="text-gray-600">Rua Principal do Maiombe, Edifício IMPM</p>
                  <p class="text-gray-600">Cabinda, Angola</p>
                </div>
              </div>
              
              <div class="flex gap-4">
                <div class="bg-primary text-white p-3 rounded-lg h-fit">
                  <mat-icon>call</mat-icon>
                </div>
                <div>
                  <h3 class="font-bold text-gray-900">Telefones</h3>
                  <p class="text-gray-600">+244 923 000 000</p>
                  <p class="text-gray-600">+244 912 000 000</p>
                </div>
              </div>
              
              <div class="flex gap-4">
                <div class="bg-primary text-white p-3 rounded-lg h-fit">
                  <mat-icon>email</mat-icon>
                </div>
                <div>
                  <h3 class="font-bold text-gray-900">Email</h3>
                  <p class="text-gray-600">geral&#64;impm-maiombe.ao</p>
                  <p class="text-gray-600">inscricoes&#64;impm-maiombe.ao</p>
                </div>
              </div>

              <div class="flex gap-4">
                <div class="bg-primary text-white p-3 rounded-lg h-fit">
                  <mat-icon>schedule</mat-icon>
                </div>
                <div>
                  <h3 class="font-bold text-gray-900">Horário</h3>
                  <p class="text-gray-600">Segunda a Sexta: 07:30 - 18:00</p>
                  <p class="text-gray-600">Sábado: 08:00 - 12:00</p>
                </div>
              </div>
            </div>

            <!-- Mock Map -->
            <div class="mt-12 h-64 bg-gray-300 rounded-2xl overflow-hidden relative">
              <div class="absolute inset-0 flex items-center justify-center text-gray-500 flex-col gap-2">
                <mat-icon class="text-4xl">map</mat-icon>
                <p class="font-medium">Mapa de Localização</p>
                <a href="https://www.google.com/maps" target="_blank" class="text-primary text-sm hover:underline">Ver no Google Maps</a>
              </div>
              <img 
                src="https://picsum.photos/seed/map/800/400?grayscale" 
                alt="Mapa" 
                class="w-full h-full object-cover opacity-50"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          <!-- Contact Form -->
          <div class="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100">
            <h2 class="text-2xl font-bold mb-6">Envie-nos uma Mensagem</h2>
            
            @if (submitted()) {
              <div class="bg-green-50 text-green-700 p-6 rounded-xl mb-8 flex items-center gap-4">
                <mat-icon>check_circle</mat-icon>
                <div>
                  <p class="font-bold">Mensagem Enviada!</p>
                  <p class="text-sm">Agradecemos o seu contacto. Responderemos em breve.</p>
                </div>
              </div>
            } @else {
              <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="space-y-6">
                <div>
                  <label for="name" class="block text-sm font-semibold text-gray-700 mb-2">Nome Completo</label>
                  <input 
                    id="name"
                    type="text" 
                    formControlName="name"
                    class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="Seu nome"
                  />
                </div>
                
                <div class="grid md:grid-cols-2 gap-6">
                  <div>
                    <label for="email" class="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                    <input 
                      id="email"
                      type="email" 
                      formControlName="email"
                      class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="seu@email.com"
                    />
                  </div>
                  <div>
                    <label for="phone" class="block text-sm font-semibold text-gray-700 mb-2">Telefone</label>
                    <input 
                      id="phone"
                      type="tel" 
                      formControlName="phone"
                      class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="9XX XXX XXX"
                    />
                  </div>
                </div>
                
                <div>
                  <label for="course" class="block text-sm font-semibold text-gray-700 mb-2">Curso de Interesse</label>
                  <select 
                    id="course"
                    formControlName="course"
                    class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all appearance-none bg-white"
                  >
                    <option value="">Seleccione um curso</option>
                    <option value="admin">Técnico de Administração</option>
                    <option value="contab">Técnico de Contabilidade</option>
                    <option value="rh">Técnico de Gestão de RH</option>
                    <option value="inf">Técnico de Informática de Gestão</option>
                    <option value="outro">Outras Informações</option>
                  </select>
                </div>
                
                <div>
                  <label for="message" class="block text-sm font-semibold text-gray-700 mb-2">Mensagem</label>
                  <textarea 
                    id="message"
                    formControlName="message"
                    rows="4"
                    class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                    placeholder="Como podemos ajudar?"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  [disabled]="contactForm.invalid"
                  class="w-full btn-primary justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <mat-icon class="mr-2">send</mat-icon>
                  Enviar Mensagem
                </button>
              </form>
            }
          </div>
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Contact {
  submitted = signal(false);
  
  contactForm = new FormGroup({
    name: new FormControl('', {validators: [Validators.required], nonNullable: true}),
    email: new FormControl('', {validators: [Validators.required, Validators.email], nonNullable: true}),
    phone: new FormControl('', {validators: [Validators.required], nonNullable: true}),
    course: new FormControl('', {validators: [Validators.required], nonNullable: true}),
    message: new FormControl('', {validators: [Validators.required], nonNullable: true}),
  });

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form Submitted', this.contactForm.value);
      this.submitted.set(true);
      // In a real app, you'd send this to a backend
    }
  }
}
