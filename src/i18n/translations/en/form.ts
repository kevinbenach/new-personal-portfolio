import type { FormTranslations } from '../../types';

export const form: FormTranslations = {
  heading: 'Send me a message',
  nameLabel: 'Full Name',
  namePlaceholder: 'Your full name',
  emailLabel: 'Email Address',
  emailPlaceholder: 'your.email@example.com',
  subjectLabel: 'Subject',
  subjectPlaceholder: 'Select a subject',
  subjectOptions: {
    job: 'Job Opportunity',
    project: 'Project Collaboration',
    consulting: 'Consulting Services',
    inquiry: 'General Inquiry',
    other: 'Other',
  },
  messageLabel: 'Message',
  messagePlaceholder:
    'Tell me about your project, opportunity, or just say hello...',
  submit: 'Send Message',
  sending: 'Sending...',
  success:
    "Thank you! Your message has been sent successfully. I'll get back to you soon.",
  error:
    'Sorry, there was an error sending your message. Please try again or contact me directly.',
  required: 'This field is required',
  invalidEmail: 'Please enter a valid email address',
};
