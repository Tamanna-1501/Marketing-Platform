export interface TestEmailData {
  to: string;
  subject: string;
  message: string;
}

export interface TestEmailResponse {
  ok: boolean;
  messageId?: string;
  error?: string;
}