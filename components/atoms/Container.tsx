import { twMerge } from "tailwind-merge";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={twMerge("max-w-container mx-auto w-full px-4", className)}>
      {children}
    </div>
  );
};
