export interface RepoContext {
  root: string;
  files: {
    name: string;
    isDirectory: boolean;
  }[];
}
