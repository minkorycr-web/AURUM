import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  showSuccessModal = signal(false);
  contactForm = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit(form: NgForm) {
    if (form.invalid) {
      form.control.markAllAsTouched();
      return;
    }

    // Handle form submission
    console.log('Form submitted:', this.contactForm);
    this.showSuccessModal.set(true);
  }

  closeModal(form?: NgForm) {
    this.showSuccessModal.set(false);
    form?.resetForm();
    this.contactForm = { name: '', email: '', message: '' };
  }
}
