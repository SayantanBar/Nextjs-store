import { cn } from "@/lib/utils";
type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};
export default function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn("mx-auto max-w-6xl xl:max-w-7lx px-8 ", className)}>
      {children}
    </div>
  );
}
