import { Search } from 'lucide-react';
import { useState } from 'react';
import { Input } from './input';
import { ScrollArea } from '@radix-ui/react-scroll-area';
import { componentCategories } from '@/types/constants';
import type { Component, ComponentCategory } from '@/types/type';

export default function ComponentPalette() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);

  const toggleCategory = (categoryName: string) => {
    setExpandedCategories((prev) =>
      prev.includes(categoryName)
        ? prev.filter((name) => name !== categoryName)
        : [...prev, categoryName],
    );
  };

  const filteredCategories: ComponentCategory[] = componentCategories.map(
    (category: ComponentCategory) => ({
      ...category,
      components: category.components.filter((comp) =>
        comp.label.toLowerCase().includes(searchQuery.toLowerCase()),
      ),
    }),
  );
  return (
    <>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search components..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-9"
        />
      </div>
      <ScrollArea className="flex-1">
        <div className="p-2">
          {filteredCategories.map((category: ComponentCategory) => {
            if (category.components.length === 0) return null;
            const isExpanded = expandedCategories.includes(category.name);

            return (
              <div key={category.name} className="mb-2">
                <button
                  onClick={() => toggleCategory(category.name)}
                  className="flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-foreground"
                >
                  <category.icon className="h-4 w-4" />
                  <span className="flex-1 text-left">{category.name}</span>
                  <span className="text-xs">{isExpanded ? '−' : '+'}</span>
                </button>

                {isExpanded && (
                  <div className="mt-1 space-y-1 pl-2">
                    {category.components.map((component: Component) => (
                      <button
                        key={component.type}
                        className="component-item flex w-full items-center gap-2 rounded-md px-2 py-2 text-sm text-foreground"
                      >
                        <component.icon className="h-4 w-4 text-muted-foreground" />
                        <span>{component.label}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </ScrollArea>
    </>
  );
}
