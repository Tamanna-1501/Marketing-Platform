import type {
  TestEmailData,
  TestEmailResponse,
} from "@/types/testEmail";

export async function mockSendTestEmail(
  data: TestEmailData
): Promise<TestEmailResponse> {

  await new Promise((resolve) => setTimeout(resolve, 1000));

  const result = Math.random();

  if (result < 0.15) {
    return {
      ok: false,
      error: "Ye address test list me nahi hai.",
    };
  }

  if (result < 0.30) {
    return {
      ok: false,
      error: "Mail nahi bheji ja saki, thodi der baad try karo.",
    };
  }

  return {
    ok: true,
    messageId: "MOCK-" + Date.now(),
  };
}