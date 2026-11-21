import type {
  TestEmailData,
  TestEmailResponse,
} from "@/types/testEmail";

import { mockSendTestEmail } from "./mock/testEmailMock";

export async function sendTestEmail(
  data: TestEmailData
): Promise<TestEmailResponse> {

  // Abhi mock API use ho rahi hai
  return mockSendTestEmail(data);

  // Backend ready hone par:
  // return fetch("/api/test-email", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(data),
  // }).then((response) => response.json());
}