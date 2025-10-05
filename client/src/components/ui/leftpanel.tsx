'use client';

import { Layers, Package } from 'lucide-react';
import ComponentPalette from './componentpalette';
import { Tabs, TabsList, TabsContent, TabsTrigger } from './tabs';
import {} from '@radix-ui/react-tabs';
import HierarchyTree from './hierarchytree';

export default function LeftPanel() {
  return (
    <div
      className="w-69 border-r border-border"
      style={{ backgroundColor: 'var(--sidebar-bg)' }}
    >
      <Tabs defaultValue="components" className="p-4 ">
        <TabsList>
          <TabsTrigger
            value="components"
            className=" text-sm font-semibold text-foreground"
          >
            <div className="flex gap-2 items-center">
              <Package />
              Components
            </div>
          </TabsTrigger>
          <TabsTrigger
            value="hierarchy"
            className="text-sm font-semibold text-foreground"
          >
            <div className="flex gap-2 items-center">
              <Layers />
              Hierarchy
            </div>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="components" className="mt-3">
          <ComponentPalette />
        </TabsContent>
        <TabsContent value="hierarchy" className="mt-3">
          <HierarchyTree />
        </TabsContent>
      </Tabs>
    </div>
  );
}
