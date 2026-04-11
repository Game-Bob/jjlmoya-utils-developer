import { describe, it, expect } from 'vitest';
import { ALL_TOOLS } from '../tools';
import { developerCategory } from '../data';

describe('Tool Validation Suite', () => {
  describe('Library Registration', () => {
    it('should have 2 tools in ALL_TOOLS', () => {
      expect(ALL_TOOLS.length).toBe(2);
    });

    it('developerCategory should be defined', () => {
      expect(developerCategory).toBeDefined();
      expect(developerCategory.i18n).toBeDefined();
    });
  });
});

