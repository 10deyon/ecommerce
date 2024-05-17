export interface ResponseData {
  success: boolean;
  code: number;
  message: string;
  data: Record<string, unknown>;
}
