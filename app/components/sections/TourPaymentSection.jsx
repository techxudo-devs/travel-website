"use client";

import { useMemo, useState } from "react";
import { useTopazPaymentMutation } from "@/app/utils/useTopazPaymentMutation";

const initialFormState = {
  firstName: "",
  lastName: "",
  zipcode: "",
  ccnumber: "",
  expmonth: "",
  expyear: "",
  SecurityCode: "",
};

export default function TourPaymentSection({ tour }) {
  const [formData, setFormData] = useState(initialFormState);
  const { mutate, isPending, isSuccess, error, data } =
    useTopazPaymentMutation();

  const tourId = tour?._id || tour?.id || "tour";
  const transReference = useMemo(
    () => `${tourId}-${Date.now()}`,
    [tourId]
  );

  const transDesc = tour?.title ? `Tour booking: ${tour.title}` : "Tour booking";
  const amount = tour?.basePrice ? String(tour.basePrice) : "";

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    mutate({
      ccnumber: formData.ccnumber.replace(/\s+/g, ""),
      expmonth: formData.expmonth,
      expyear: formData.expyear,
      SecurityCode: formData.SecurityCode,
      FirstName: formData.firstName,
      LastName: formData.lastName,
      zipcode: formData.zipcode,
      ccamount: amount,
      TransReference: transReference,
      TransDesc: transDesc,
    });
  };

  return (
    <section className="bg-slate-50 py-16">
      <div className="container mx-auto px-4">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-first">
              Secure your tour in minutes
            </h2>
            <p className="mt-3 text-base text-gray-600 max-w-xl">
              Complete your booking with a secure card payment. Your total is
              locked to the tour package shown here.
            </p>
            <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-800">
                {tour?.title || "Selected Tour"}
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                {tour?.location}
              </p>
              <div className="mt-4 flex items-baseline justify-between">
                <span className="text-sm font-medium text-gray-500">
                  Amount (USD)
                </span>
                <span className="text-2xl font-bold text-gray-900">
                  ${tour?.basePrice?.toLocaleString()}
                </span>
              </div>
              <p className="mt-3 text-xs text-gray-500">
                Reference: {transReference}
              </p>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800">
              Payment details
            </h3>

            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
              <div className="grid gap-4 md:grid-cols-2">
                <input
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First name"
                  required
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-cyan-500 focus:outline-none"
                />
                <input
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last name"
                  required
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-cyan-500 focus:outline-none"
                />
              </div>

              <input
                name="ccnumber"
                value={formData.ccnumber}
                onChange={handleChange}
                placeholder="Card number"
                required
                inputMode="numeric"
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-cyan-500 focus:outline-none"
              />

              <div className="grid gap-4 md:grid-cols-3">
                <input
                  name="expmonth"
                  value={formData.expmonth}
                  onChange={handleChange}
                  placeholder="MM"
                  required
                  inputMode="numeric"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-cyan-500 focus:outline-none"
                />
                <input
                  name="expyear"
                  value={formData.expyear}
                  onChange={handleChange}
                  placeholder="YYYY"
                  required
                  inputMode="numeric"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-cyan-500 focus:outline-none"
                />
                <input
                  name="SecurityCode"
                  value={formData.SecurityCode}
                  onChange={handleChange}
                  placeholder="CVV"
                  required
                  inputMode="numeric"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-cyan-500 focus:outline-none"
                />
              </div>

              <input
                name="zipcode"
                value={formData.zipcode}
                onChange={handleChange}
                placeholder="Billing ZIP"
                required
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-cyan-500 focus:outline-none"
              />

              <button
                type="submit"
                disabled={isPending}
                className="w-full rounded-xl bg-cyan-600 py-3 text-sm font-semibold text-white transition hover:bg-cyan-700 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isPending ? "Processing payment..." : "Pay securely"}
              </button>

              {isSuccess && (
                <p className="rounded-lg bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
                  Payment approved. Confirmation: {data?.Message}
                </p>
              )}
              {error && (
                <p className="rounded-lg bg-rose-50 px-4 py-3 text-sm text-rose-600">
                  {error.message}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
