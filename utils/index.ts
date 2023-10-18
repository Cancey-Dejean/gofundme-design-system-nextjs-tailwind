// utils.ts
export const formatExcerpt = (excerpt: string, maxLength: number): string => {
  let formattedExcerpt = excerpt;
  if (formattedExcerpt.length > maxLength) {
    formattedExcerpt = formattedExcerpt.substring(0, maxLength);
    const lastSpaceIndex = formattedExcerpt.lastIndexOf(" ");
    if (lastSpaceIndex !== -1) {
      formattedExcerpt = formattedExcerpt.substring(0, lastSpaceIndex) + "...";
    } else {
      formattedExcerpt += "...";
    }
  }
  return formattedExcerpt;
};
