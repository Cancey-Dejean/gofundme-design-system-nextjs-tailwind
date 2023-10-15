import { twMerge } from "tailwind-merge";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={twMerge("mx-auto w-full max-w-[1152px] px-4", className)}>
      {children}
    </div>
  );
};
