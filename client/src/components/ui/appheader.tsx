"use client"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Eye, Code, Download, Settings, Smartphone, Tablet, Monitor, Trash2 } from "lucide-react"


export default function AppHeader() {
  return (
    <div
      className="flex h-14 items-center justify-between border-b border-border px-4"
      style={{ backgroundColor: "var(--toolbar-bg)" }}
    >
      <div className="flex items-center gap-2">
        <h1 className="text-lg font-semibold">Layr</h1>
        <Separator orientation="vertical" className="mx-2 h-6" />
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-1 rounded-md border border-border p-1">
        <Button variant="ghost" size="icon" className="h-7 w-7">
          <Monitor className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="h-7 w-7">
          <Tablet className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="h-7 w-7">
          <Smartphone className="h-4 w-4" />
        </Button>
      </div>

      <div className="flex items-center gap-2">
        <Button variant="ghost" size="sm" className="gap-2">
          <Eye className="h-4 w-4" />
          Preview
        </Button>
        <Button variant="ghost" size="sm" className="gap-2">
          <Code className="h-4 w-4" />
          Code
        </Button>
        <Button variant="ghost" size="sm" className="gap-2">
          <Download className="h-4 w-4" />
          Export
        </Button>
        <Separator orientation="vertical" className="mx-2 h-6" />
        <Button variant="ghost" size="icon" className="h-8 w-8" >
          <Trash2 className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Settings className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
