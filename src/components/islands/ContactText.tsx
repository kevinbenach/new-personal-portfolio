import { t } from '@/stores/language';

export default function ContactText() {
  return (
    <>
      <h2 className="heading-lg mb-6">{t.value.contact.title}</h2>
      <p className="body-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
        {t.value.contact.subtitle}
      </p>
    </>
  );
}