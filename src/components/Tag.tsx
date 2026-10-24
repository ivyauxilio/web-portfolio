export default function Tag({ children }: { children: string }) {
  return (
    <span className="rounded-md bg-lavender-200 px-2.5 py-1 text-xs font-medium text-midnight-800">{children}</span>
  );
}
