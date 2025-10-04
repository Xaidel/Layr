import AppHeader from "./appheader";

export default function AppLayout() {
  return (
    <>
      <AppHeader />
      <div className="flex h-screen">
        <aside className="h-full flex-1 border-r border-border ">
        </aside>
        <main className="h-full w-full flex-3 "></main>
        <aside className="h-full w-full flex-1 border-l border-border">
        </aside>
      </div>
    </>
  )
}
