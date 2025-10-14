/**
 * SVGO Configuration for Icon Optimization
 *
 * This configuration ensures SVGs are optimized for web use while maintaining quality.
 * It removes unnecessary metadata, optimizes paths, and ensures SVGs work well with Astro.
 */

export default {
  multipass: true, // Run optimizations multiple times for better results
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          // Keep viewBox for responsive scaling
          removeViewBox: false,
          // Keep IDs for potential references
          cleanupIds: false,
        },
      },
    },
    // Remove unnecessary attributes that bloat file size
    'removeXMLNS',
    // Optimize SVG structure
    'convertPathData',
    'mergePaths',
    // Remove editor metadata
    'removeEditorsNSData',
    // Clean up unnecessary groups
    'collapseGroups',
  ],
};
