import React from "react";
import { cn } from "~/utils";

interface PageHeaderProps {
  title: string;
  description: string;
  centered?: boolean;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  description,
  centered = false,
}) => {
  return (
    <section className="border-b border-white/10 px-6 py-20 pt-32">
      <div
        className={cn(
          "mx-auto max-w-7xl",
          centered && "max-w-4xl text-center",
        )}
      >
        <h1 className="mb-6 text-5xl font-bold text-white">{title}</h1>
        <p className="max-w-2xl text-xl text-gray-400">
          {description}
        </p>
      </div>
    </section>
  );
};

export default PageHeader;
