import SideNav from '@/app/ui/components/work/Sidenav';
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col sm:flex-row">
      <div className="w-full flex-none sm:w-56">
        <SideNav />
      </div>
      <div className="flex flex-grow justify-center p-6">
        <div className="w-full max-w-3xl">{children}</div>
      </div>
    </div>
  );
}