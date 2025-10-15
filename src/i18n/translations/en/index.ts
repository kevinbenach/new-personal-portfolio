/**
 * English Translations Aggregator
 *
 * This file combines all English translation modules into a single export.
 * Open/Closed Principle: Adding a new section requires only adding an import and property.
 */

import type { Translations } from '../../types';
import { navigation } from './navigation';
import { hero } from './hero';
import { about } from './about';
import { skills } from './skills';
import { experience } from './experience';
import { projects } from './projects';
import { contact } from './contact';
import { form } from './form';
import { footer } from './footer';

/**
 * Complete English translations
 * Type-safe thanks to Translations interface
 */
export const en: Translations = {
  navigation,
  hero,
  about,
  skills,
  experience,
  projects,
  contact,
  form,
  footer,
};
