"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Search, Box, Type, MousePointer2, ImageIcon, CreditCard, Minus, Layout } from "lucide-react"

const componentCategories = [
  {
    name: "Layout",
    icon: Layout,
    components: [
      { type: "container", label: "Container", icon: Box },
      { type: "card", label: "Card", icon: CreditCard },
      { type: "divider", label: "Divider", icon: Minus },
    ],
  },
  {
    name: "Typography",
    icon: Type,
    components: [
      { type: "heading", label: "Heading", icon: Type },
      { type: "text", label: "Text", icon: Type },
    ],
  },
  {
    name: "Forms",
    icon: MousePointer2,
    components: [
      { type: "button", label: "Button", icon: MousePointer2 },
      { type: "input", label: "Input", icon: MousePointer2 },
    ],
  },
  {
    name: "Media",
    icon: ImageIcon,
    components: [{ type: "image", label: "Image", icon: ImageIcon }],
  },
]

export default function ComponentPalette() {
  const [searchQuery, setSearchQuery] = useState("")
  const [expandedCategories, setExpandedCategories] = useState<string[]>(["Layout", "Typography", "Forms", "Media"])

  const toggleCategory = (categoryName: string) => {
    setExpandedCategories((prev) =>
      prev.includes(categoryName) ? prev.filter((name) => name !== categoryName) : [...prev, categoryName],
    )
  }

  const filteredCategories = componentCategories.map((category) => ({
    ...category,
    components: category.components.filter((comp) => comp.label.toLowerCase().includes(searchQuery.toLowerCase())),
  }))

  return (
    <div className="w-64 border-r border-border" style={{ backgroundColor: "var(--sidebar-bg)" }}>
      <div className="flex h-full flex-col">
        <div className="border-b border-border p-4">
          <h2 className="mb-3 text-sm font-semibold text-foreground">Components</h2>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search components..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9"
            />
          </div>
        </div>

        <ScrollArea className="flex-1">
          <div className="p-2">
            {filteredCategories.map((category) => {
              if (category.components.length === 0) return null
              const isExpanded = expandedCategories.includes(category.name)

              return (
                <div key={category.name} className="mb-2">
                  <button
                    onClick={() => toggleCategory(category.name)}
                    className="flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-foreground"
                  >
                    <category.icon className="h-4 w-4" />
                    <span className="flex-1 text-left">{category.name}</span>
                    <span className="text-xs">{isExpanded ? "−" : "+"}</span>
                  </button>

                  {isExpanded && (
                    <div className="mt-1 space-y-1 pl-2">
                      {category.components.map((component) => (
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
              )
            })}
          </div>
        </ScrollArea>
      </div>
    </div>
  )
}
