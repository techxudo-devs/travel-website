"use client";

import { useMutation } from "@tanstack/react-query";

async function submitTopazPayment(payload) {
  const response = await fetch("/api/topaz/payment", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const data = await response.json();

  if (!response.ok || data?.ErrorCode === "Failed") {
    throw new Error(data?.MessageDescription || "Payment failed.");
  }

  return data;
}

export function useTopazPaymentMutation() {
  return useMutation({ mutationFn: submitTopazPayment });
}
