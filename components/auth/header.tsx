import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

interface HeaderProps {
  label: string;
  subHeading?: string;
}

export const Header = ({ label, subHeading = "Welcome Back" }: HeaderProps) => {
  return (
    <div className="w-full flex flex-col gap-y-1 items-center justify-center">
      <h1 className={cn("text-3xl font-semibold", font.className)}>
        &#128271;{label}
      </h1>
      <p className="text-muted-foreground text-sm">{subHeading} </p>
    </div>
  );
};
