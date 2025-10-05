import AppHeader from './appheader';
import LeftPanel from '../components/layout/leftpanel';
import PropsPanel from '../components/layout/propspanel';

export default function AppLayout() {
  return (
    <>
      <div className="flex flex-col h-screen">
        <AppHeader />
        <div className="flex h-screen">
          <LeftPanel />
          <main className="h-full w-full flex-3 "></main>
          <PropsPanel />
        </div>
      </div>
    </>
  );
}
