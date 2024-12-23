// Month Extractor
const formatMonthDay = (date: Date): string => {
  const options: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "numeric",
  };
  return new Intl.DateTimeFormat("en-US", options).format(date);
};

// Data Transformation
export const transformedData = (
  visitors: any,
): { visitors: number; date: string }[] => {
  const visitorCounts: Record<string, number> = {};

  visitors.forEach((visitor: any) => {
    const date: string = formatMonthDay(visitor.createdAt);
    console.log(visitor.createdAt);

    //@ts-ignore
    if (!visitorCounts[date]) {
      //@ts-ignore
      visitorCounts[date] = 1;
    } else {
      //@ts-ignore
      visitorCounts[date]++;
    }
  });

  const componentData: { visitors: number; date: string }[] = [];

  for (const date in visitorCounts) {
    //@ts-ignore
    componentData.push({ visitors: visitorCounts[date], date });
  }
  return componentData;
};
