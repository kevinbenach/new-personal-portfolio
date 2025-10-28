import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen } from '@testing-library/preact';
import userEvent from '@testing-library/user-event';
import ContactForm from './ContactForm';

// Mock the language store
vi.mock('../../stores/language', () => ({
  t: {
    value: {
      form: {
        heading: 'Get in Touch',
        nameLabel: 'Name',
        namePlaceholder: 'Your name',
        emailLabel: 'Email',
        emailPlaceholder: 'your.email@example.com',
        subjectLabel: 'Subject',
        subjectPlaceholder: 'Select a subject',
        messageLabel: 'Message',
        messagePlaceholder: 'Your message',
        submit: 'Send Message',
        sending: 'Sending...',
        success: 'Message sent successfully!',
        error: 'Failed to send message. Please try again.',
        subjectOptions: {
          job: 'Job Opportunity',
          project: 'Project Collaboration',
          consulting: 'Consulting',
          inquiry: 'General Inquiry',
          other: 'Other',
        },
      },
    },
  },
}));

describe('ContactForm', () => {
  beforeEach(() => {
    // Clear all mocks before each test
    vi.clearAllMocks();
    global.fetch = vi.fn();
  });

  describe('Form Rendering', () => {
    it('should render all form fields', () => {
      render(<ContactForm />);

      expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/subject/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
    });

    it('should render submit button', () => {
      render(<ContactForm />);
      expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument();
    });

    it('should render form heading', () => {
      render(<ContactForm />);
      expect(screen.getByText('Get in Touch')).toBeInTheDocument();
    });

    it('should have all required fields marked', () => {
      render(<ContactForm />);

      const nameInput = screen.getByLabelText(/name/i);
      const emailInput = screen.getByLabelText(/email/i);
      const subjectSelect = screen.getByLabelText(/subject/i);
      const messageInput = screen.getByLabelText(/message/i);

      expect(nameInput).toHaveAttribute('required');
      expect(emailInput).toHaveAttribute('required');
      expect(subjectSelect).toHaveAttribute('required');
      expect(messageInput).toHaveAttribute('required');
    });

    it('should have correct input types', () => {
      render(<ContactForm />);

      const nameInput = screen.getByLabelText(/name/i);
      const emailInput = screen.getByLabelText(/email/i);

      expect(nameInput).toHaveAttribute('type', 'text');
      expect(emailInput).toHaveAttribute('type', 'email');
    });
  });

  describe('Form Input', () => {
    it('should allow typing in name field', async () => {
      const user = userEvent.setup();
      render(<ContactForm />);

      const nameInput = screen.getByLabelText(/name/i) as HTMLInputElement;
      await user.type(nameInput, 'John Doe');

      expect(nameInput.value).toBe('John Doe');
    });

    it('should allow typing in email field', async () => {
      const user = userEvent.setup();
      render(<ContactForm />);

      const emailInput = screen.getByLabelText(/email/i) as HTMLInputElement;
      await user.type(emailInput, 'john@example.com');

      expect(emailInput.value).toBe('john@example.com');
    });

    it('should allow selecting a subject', async () => {
      const user = userEvent.setup();
      render(<ContactForm />);

      const subjectSelect = screen.getByLabelText(/subject/i) as HTMLSelectElement;
      await user.selectOptions(subjectSelect, 'job-opportunity');

      expect(subjectSelect.value).toBe('job-opportunity');
    });

    it('should allow typing in message field', async () => {
      const user = userEvent.setup();
      render(<ContactForm />);

      const messageInput = screen.getByLabelText(/message/i) as HTMLTextAreaElement;
      await user.type(messageInput, 'Hello, this is a test message.');

      expect(messageInput.value).toBe('Hello, this is a test message.');
    });

    it('should have subject options', () => {
      render(<ContactForm />);

      const subjectSelect = screen.getByLabelText(/subject/i);
      const options = Array.from(subjectSelect.querySelectorAll('option'));

      expect(options.length).toBeGreaterThan(1); // More than just placeholder
      expect(options.some((opt) => opt.value === 'job-opportunity')).toBe(true);
      expect(options.some((opt) => opt.value === 'project-collaboration')).toBe(true);
      expect(options.some((opt) => opt.value === 'consulting')).toBe(true);
      expect(options.some((opt) => opt.value === 'general-inquiry')).toBe(true);
    });
  });

  describe('Form Validation', () => {
    it('should have email field with proper validation attributes', () => {
      render(<ContactForm />);

      const emailInput = screen.getByLabelText(/email/i);

      expect(emailInput).toHaveAttribute('type', 'email');
      expect(emailInput).toHaveAttribute('required');
    });

    it('should have textarea with minimum rows', () => {
      render(<ContactForm />);

      const messageInput = screen.getByLabelText(/message/i);
      expect(messageInput).toHaveAttribute('rows');
    });
  });
});
