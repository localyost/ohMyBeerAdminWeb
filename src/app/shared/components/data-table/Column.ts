export interface Column {
  title: string;
  type: 'string' | 'number' | 'percent';
  key: string;
  objectKey?: string;
}
