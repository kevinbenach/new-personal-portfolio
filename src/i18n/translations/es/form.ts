import type { FormTranslations } from '../../types';

export const form: FormTranslations = {
  heading: 'Envíame un mensaje',
  nameLabel: 'Nombre completo',
  namePlaceholder: 'Tu nombre completo',
  emailLabel: 'Correo electrónico',
  emailPlaceholder: 'tu.correo@ejemplo.com',
  subjectLabel: 'Asunto',
  subjectPlaceholder: 'Selecciona un asunto',
  subjectOptions: {
    job: 'Oportunidad de trabajo',
    project: 'Colaboración en proyecto',
    consulting: 'Servicios de consultoría',
    inquiry: 'Consulta general',
    other: 'Otro',
  },
  messageLabel: 'Mensaje',
  messagePlaceholder:
    'Cuéntame sobre tu proyecto, oportunidad, o simplemente saluda...',
  submit: 'Enviar mensaje',
  sending: 'Enviando...',
  success:
    '¡Gracias! Tu mensaje ha sido enviado correctamente. Te responderé pronto.',
  error:
    'Lo siento, hubo un error al enviar tu mensaje. Por favor, inténtalo de nuevo o contáctame directamente.',
  required: 'Este campo es obligatorio',
  invalidEmail: 'Por favor, introduce una dirección de correo válida',
};
