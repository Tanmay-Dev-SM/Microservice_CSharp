import { useParamsStore } from "@/hooks/useParamsStore";
import React from "react";
import Heading from "./Heading";
import { Button } from "flowbite-react";

type Props = {
  title?: string;
  subtitle?: string;
  showReset?: boolean;
};

export default function EmptyFilter({
  title = "No matched for this filer",
  subtitle = "Try changing or resetting the filter",
  showReset,
}: Props) {
  const reset = useParamsStore((state) => state.reset);

  return (
    <div className="flex flex-col items-center justify-center text-center h-[60vh] shadow-lg">
      <Heading title={title} subtitle={subtitle} center />
      <div className="mt-4">
        {showReset && (
          <Button outline onClick={reset}>
            Remove Filters
          </Button>
        )}
      </div>
    </div>
  );
}
