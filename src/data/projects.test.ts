import { describe, it, expect } from 'vitest';
import { projects, featuredProjects } from './projects';

describe('Projects Data', () => {
  describe('projects array', () => {
    it('should have all required properties', () => {
      projects.forEach((project) => {
        expect(project).toHaveProperty('id');
        expect(project).toHaveProperty('title');
        expect(project).toHaveProperty('description');
        expect(project).toHaveProperty('longDescription');
        expect(project).toHaveProperty('technologies');
        expect(project).toHaveProperty('githubUrl');
        expect(project).toHaveProperty('liveUrl');
        expect(project).toHaveProperty('imageUrl');
        expect(project).toHaveProperty('featured');
        expect(project).toHaveProperty('status');
        expect(project).toHaveProperty('category');
      });
    });

    it('should have unique project IDs', () => {
      const ids = projects.map((p) => p.id);
      const uniqueIds = new Set(ids);
      expect(ids.length).toBe(uniqueIds.size);
    });

    it('should have valid URLs', () => {
      projects.forEach((project) => {
        expect(project.githubUrl).toMatch(/^https?:\/\//);
        expect(project.liveUrl).toMatch(/^https?:\/\//);
      });
    });

    it('should have non-empty technologies array', () => {
      projects.forEach((project) => {
        expect(Array.isArray(project.technologies)).toBe(true);
        expect(project.technologies.length).toBeGreaterThan(0);
      });
    });

    it('should have valid status values', () => {
      const validStatuses = ['completed', 'in-progress', 'planned'];
      projects.forEach((project) => {
        expect(validStatuses).toContain(project.status);
      });
    });

    it('should have at least one project', () => {
      expect(projects.length).toBeGreaterThan(0);
    });
  });

  describe('featuredProjects', () => {
    it('should only include projects marked as featured', () => {
      featuredProjects.forEach((project) => {
        expect(project.featured).toBe(true);
      });
    });

    it('should be a subset of all projects', () => {
      expect(featuredProjects.length).toBeLessThanOrEqual(projects.length);
    });

    it('should match featured flag in projects array', () => {
      const manualFeatured = projects.filter((p) => p.featured);
      expect(featuredProjects.length).toBe(manualFeatured.length);
    });

    it('should have at least one featured project', () => {
      expect(featuredProjects.length).toBeGreaterThan(0);
    });
  });
});
