import AppHeader from "./appheader";
import ComponentPallete from "./componentpallete";
import PropsPanel from "./propspanel";

export default function AppLayout() {
  return (
    <>
      <AppHeader />
      <div className="flex h-screen">
        <ComponentPallete />
        <main className="h-full w-full flex-3 "></main>
        <PropsPanel />
      </div>
    </>
  )
}
