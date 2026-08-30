import { describe, it, expect } from 'vitest';
import { ALL_TOOLS } from '../tools';
import { ALL_ENTRIES } from '../entries';
import { developerCategory } from '../data';

describe('Tool Validation Suite', () => {
  describe('Library Registration', () => {
    it('should have 28 tools in ALL_TOOLS', () => {
      expect(ALL_TOOLS.length).toBe(30);
    });

    it('developerCategory should be defined', () => {
      expect(developerCategory).toBeDefined();
      expect(developerCategory.i18n).toBeDefined();
    });

    it('ALL_ENTRIES should contain every tool entry', () => {
      expect(ALL_ENTRIES.map((entry) => entry.id).sort()).toEqual(ALL_TOOLS.map((tool) => tool.entry.id).sort());
    });
  });
});

