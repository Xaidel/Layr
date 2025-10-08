import AppHeader from './appheader';
import LeftPanel from './leftpanel';
import PropsPanel from './propspanel';
import Canvas from '../editor/canvas/Canvas';

export default function AppLayout() {
  return (
    <>
      <div className="flex flex-col h-screen">
        <AppHeader />
        <div className="flex flex-1 overflow-hidden">
          <LeftPanel />
       <main className="flex-1 overflow-auto bg-muted/20 p-4">
          <Canvas onSelectComponent={() => {}} />
        </main>
          <PropsPanel />
        </div>
      </div>
    </>
  );
}
