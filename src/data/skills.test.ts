import { describe, it, expect } from 'vitest';
import { skills, skillCategories } from './skills';

describe('Skills Data', () => {
  describe('skills array', () => {
    it('should have all required properties', () => {
      skills.forEach((skill) => {
        expect(skill).toHaveProperty('name');
        expect(skill).toHaveProperty('category');
        expect(skill).toHaveProperty('proficiency');
        expect(skill).toHaveProperty('iconName');
      });
    });

    it('should have valid category values', () => {
      const validCategories = ['frontend', 'backend', 'database', 'tools'];
      skills.forEach((skill) => {
        expect(validCategories).toContain(skill.category);
      });
    });

    it('should have valid proficiency levels', () => {
      const validProficiencies = ['beginner', 'intermediate', 'advanced', 'expert'];
      skills.forEach((skill) => {
        expect(validProficiencies).toContain(skill.proficiency);
      });
    });

    it('should contain frontend skills', () => {
      const frontendSkills = skills.filter((s) => s.category === 'frontend');
      expect(frontendSkills.length).toBeGreaterThan(0);
      expect(frontendSkills.some((s) => s.name === 'React')).toBe(true);
    });

    it('should contain backend skills', () => {
      const backendSkills = skills.filter((s) => s.category === 'backend');
      expect(backendSkills.length).toBeGreaterThan(0);
      expect(backendSkills.some((s) => s.name === 'Node.js')).toBe(true);
    });

    it('should contain database skills', () => {
      const databaseSkills = skills.filter((s) => s.category === 'database');
      expect(databaseSkills.length).toBeGreaterThan(0);
      expect(databaseSkills.some((s) => s.name === 'PostgreSQL')).toBe(true);
    });

    it('should contain tool skills', () => {
      const toolSkills = skills.filter((s) => s.category === 'tools');
      expect(toolSkills.length).toBeGreaterThan(0);
      expect(toolSkills.some((s) => s.name === 'Git')).toBe(true);
    });

    it('should have unique skill names', () => {
      const names = skills.map((s) => s.name);
      const uniqueNames = new Set(names);
      expect(names.length).toBe(uniqueNames.size);
    });
  });

  describe('skillCategories', () => {
    it('should have all category types', () => {
      const categoryIds = skillCategories.map((c) => c.id);
      expect(categoryIds).toContain('frontend');
      expect(categoryIds).toContain('backend');
      expect(categoryIds).toContain('database');
      expect(categoryIds).toContain('tools');
    });

    it('should have color assigned to each category', () => {
      skillCategories.forEach((category) => {
        expect(category).toHaveProperty('color');
        expect(typeof category.color).toBe('string');
      });
    });

    it('should match all skill categories', () => {
      const categoryIds = skillCategories.map((c) => c.id);
      const skillCategoryIds = [...new Set(skills.map((s) => s.category))];

      skillCategoryIds.forEach((id) => {
        expect(categoryIds).toContain(id);
      });
    });
  });
});
