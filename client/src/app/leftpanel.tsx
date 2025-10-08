'use client';

import { Layers, Package } from 'lucide-react';
import ComponentPalette from '../editor/palette/componentpalette';
import {
  Tabs,
  TabsList,
  TabsContent,
  TabsTrigger,
} from '../components/ui/tabs';
import {} from '@radix-ui/react-tabs';
import HierarchyTree from '../editor/hierarchy/hierarchytree';
import { ScrollArea } from '@/app/scroll-area';

export default function LeftPanel() {
  return (
    <div
      className="w-69 border-r border-border h-full flex flex-col"
      style={{ backgroundColor: 'var(--sidebar-bg)' }}
    >
      <Tabs
        defaultValue="components"
        className="flex flex-col flex-1 overflow-hidden"
      >
        <div className="p-4 pb-2 border-b border-border shrink-0">
          <TabsList className="text-sm font-semibold text-foreground">
            <TabsTrigger
              value="components"
              className=" text-sm font-semibold text-foreground"
            >
              <div className="flex gap-2 items-center">
                <Package size={16} />
                Components
              </div>
            </TabsTrigger>
            <TabsTrigger
              value="hierarchy"
              className="text-sm font-semibold text-foreground"
            >
              <div className="flex gap-2 items-center">
                <Layers size={16} />
                Hierarchy
              </div>
            </TabsTrigger>
          </TabsList>
        </div>

        <div className="flex-1 overflow-hidden">
          <ScrollArea className="h-full px-4 pb-4">
            <TabsContent value="components" className="mt-3">
              <ComponentPalette />
            </TabsContent>
            <TabsContent value="hierarchy" className="mt-3">
              <HierarchyTree />
            </TabsContent>
          </ScrollArea>
        </div>
      </Tabs>
    </div>
  );
}
