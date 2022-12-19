import getReadingTime from 'reading-time';
import { toString } from 'mdast-util-to-string';

export function readingTime(){
  return async function (tree, { data }) {
    const textOnPage = toString(tree);
    const readingTime = getReadingTime(textOnPage);
    const roundedTime = Math.round(readingTime.minutes);
    const readingTimeLabel = roundedTime > 1 ? `${roundedTime} mins` : `${roundedTime} min`;
    data.astro.frontmatter.readTime = readingTimeLabel;
  }
}