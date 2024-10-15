import Sidebar from "@/components/Sidebar";

// app/dashboard/page.tsx
export default function DashboardPage() {
  return (
    <>
      <div className="flex-1 p-6">
        <Sidebar />
        <h2 className="text-2xl font-bold">Main Content Area</h2>
        <p>This is where the content of the dashboard will be displayed.</p>
      </div>
    </>
  );
}
