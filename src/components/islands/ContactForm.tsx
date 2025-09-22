import { useState, useCallback } from 'preact/hooks';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FieldErrors {
  [key: string]: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<FieldErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const validateForm = useCallback((): boolean => {
    const newErrors: FieldErrors = {};

    // Validate required fields
    const requiredFields: (keyof FormData)[] = ['name', 'email', 'subject', 'message'];

    requiredFields.forEach(field => {
      if (!formData[field] || formData[field].trim() === '') {
        newErrors[field] = 'This field is required';
      }
    });

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  const simulateFormSubmission = async (): Promise<void> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Simulate random success/failure for demo purposes
    // In real implementation, this would be an actual API call
    if (Math.random() > 0.1) {
      return Promise.resolve();
    } else {
      throw new Error('Simulated error');
    }
  };

  const handleSubmit = useCallback(async (e: Event) => {
    e.preventDefault();

    // Clear previous messages
    setShowSuccess(false);
    setShowError(false);
    setErrors({});

    // Validate form
    if (!validateForm()) {
      return;
    }

    // Show loading state
    setIsSubmitting(true);

    try {
      // Simulate form submission (replace with actual API call)
      await simulateFormSubmission();

      // Show success message and reset form
      setShowSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      // Show error message
      setShowError(true);
    } finally {
      setIsSubmitting(false);
    }
  }, [formData, validateForm]);

  const handleInputChange = useCallback((
    e: Event
  ) => {
    const target = e.target as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
    const { name, value } = target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  }, [errors]);

  const getFieldClasses = (fieldName: string): string => {
    const baseClasses = "w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-800 dark:text-white transition-colors duration-200";
    const errorClasses = "border-red-500 focus:ring-red-500 focus:border-red-500";
    const normalClasses = "border-gray-300 dark:border-gray-600";

    return `${baseClasses} ${errors[fieldName] ? errorClasses : normalClasses}`;
  };

  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-8">
      <h3 className="text-2xl md:text-3xl font-semibold leading-tight text-gray-900 dark:text-white mb-6">
        Send me a message
      </h3>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className={getFieldClasses('name')}
            placeholder="Your full name"
          />
          {errors.name && (
            <span className="text-red-500 text-sm block mt-1">{errors.name}</span>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className={getFieldClasses('email')}
            placeholder="your.email@example.com"
          />
          {errors.email && (
            <span className="text-red-500 text-sm block mt-1">{errors.email}</span>
          )}
        </div>

        {/* Subject Field */}
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Subject *
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            required
            className={getFieldClasses('subject')}
          >
            <option value="">Select a subject</option>
            <option value="job-opportunity">Job Opportunity</option>
            <option value="project-collaboration">Project Collaboration</option>
            <option value="consulting">Consulting Services</option>
            <option value="general-inquiry">General Inquiry</option>
            <option value="other">Other</option>
          </select>
          {errors.subject && (
            <span className="text-red-500 text-sm block mt-1">{errors.subject}</span>
          )}
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleInputChange}
            required
            className={`${getFieldClasses('message')} resize-vertical`}
            placeholder="Tell me about your project, opportunity, or just say hello..."
          />
          {errors.message && (
            <span className="text-red-500 text-sm block mt-1">{errors.message}</span>
          )}
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`
              inline-flex items-center justify-center font-medium transition-all duration-200
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md
              px-6 py-3 text-lg w-full group
              ${isSubmitting
                ? 'bg-gray-400 cursor-not-allowed opacity-75'
                : 'bg-primary-600 text-white hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 shadow-sm hover:shadow-md'
              }
            `}
          >
            <span className={isSubmitting ? 'hidden' : 'block'}>Send Message</span>
            <span className={isSubmitting ? 'block' : 'hidden'}>Sending...</span>
            <svg
              className={`ml-2 h-5 w-5 transition-transform duration-200 ${isSubmitting ? '' : 'group-hover:translate-x-1'}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </div>

        {/* Success/Error Messages */}
        {(showSuccess || showError) && (
          <div className="mt-6">
            {showSuccess && (
              <div className="p-4 bg-green-100 border border-green-300 text-green-700 rounded-lg">
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Thank you! Your message has been sent successfully. I'll get back to you soon.
                </div>
              </div>
            )}
            {showError && (
              <div className="p-4 bg-red-100 border border-red-300 text-red-700 rounded-lg">
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  Sorry, there was an error sending your message. Please try again or contact me directly.
                </div>
              </div>
            )}
          </div>
        )}
      </form>
    </div>
  );
}