import { Navbar } from './ui/components/Navbar';
import { Header } from './ui/sections/Header';
import { WorkSection } from './ui/sections/WorkSection';

export default function Home() {
  return (
    <div className="flex flex-col gap-4 p-6 max-w-4xl mx-auto sm:px-24 py-24 border-black">
      <Header />
      <div className="flex flex-row gap-1">
        <Navbar />
      </div>
      <WorkSection />
    </div>
  );
}
