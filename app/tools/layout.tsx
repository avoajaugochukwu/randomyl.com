export default function ToolsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto my-32 px-4">
        {children}
      </div>
    </div>
  );
}