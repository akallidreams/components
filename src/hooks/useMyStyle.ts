import { useMemo } from "react";

export const useMyStyle = (style: string, props: [key: any]) =>
  useMemo(() => {
    return style;
  }, [...props]);
