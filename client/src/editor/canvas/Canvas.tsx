import { useState } from 'react';
import { nanoid } from 'nanoid';
import type { ComponentItem } from '@/types/constants';

interface CanvasProps {
  onSelectComponent: (comp: ComponentItem) => void;
}

export default function Canvas({ onSelectComponent }: CanvasProps) {
  const [components, setComponents] = useState<ComponentItem[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const data = e.dataTransfer.getData('application/reactflow');
    if (!data) return;
    const component = JSON.parse(data) as Omit<ComponentItem, 'id'>;

    const newComp: ComponentItem = { ...component, id: nanoid() };
    setComponents((prev) => [...prev, newComp]);
  };

  const handleSelect = (comp: ComponentItem) => {
    setSelectedId(comp.id);
    onSelectComponent(comp);
  };

  return (
    <main
      className="flex-3 bg-muted/20 p-4"
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
    >
      <div className="h-full w-full border-2 border-dashed border-muted rounded-xl flex flex-col items-center justify-start p-4 overflow-auto">
        {components.length === 0 ? (
          <span className="text-sm text-muted-foreground mt-10">
            Drop components here
          </span>
        ) : (
          components.map((comp) => (
            <div
              key={comp.id}
              onClick={() => handleSelect(comp)}
              className={`p-3 mb-2 bg-white border rounded-md shadow-sm cursor-pointer w-full transition ${
                selectedId === comp.id
                  ? 'border-blue-500 ring-2 ring-blue-300'
                  : 'border-transparent'
              }`}
            >
              <span className="font-medium text-sm">{comp.label}</span>
            </div>
          ))
        )}
      </div>
    </main>
  );
}
