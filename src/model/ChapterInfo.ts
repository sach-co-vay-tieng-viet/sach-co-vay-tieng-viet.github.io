export interface ChapterInfo{
  title: string;
  path?: string;
  subchapters: ChapterInfo[];
}