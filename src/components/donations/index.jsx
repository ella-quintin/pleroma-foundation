// src/components/donation/DonationModal.jsx
import { useEffect, useState } from "react";

/**
 * DonationModal
 * - Multi-step: Personal -> Donation -> Payment -> Review -> Complete
 * - Paystack inline integration (public key via env)
 *
 * Requirements:
 * - Add <script src="https://js.paystack.co/v1/inline.js"></script> in index.html
 * - Set VITE_PAYSTACK_PUBLIC_KEY in env
 */

const FIXED_MONTHLY = 50; // change to client's monthly amount
const FIXED_ANNUAL = 500; // change to client's annual amount

export default function DonationModal({ onClose }) {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    frequency: "one-time", // one-time | monthly | annual
    amount: "", // numeric in GHS
    paymentMethod: "card", // card | mobile-money | bank-transfer
    phone: "",
  });

  // Autofill fixed amounts when frequency changes
  useEffect(() => {
    if (form.frequency === "monthly") {
      setForm((f) => ({ ...f, amount: String(FIXED_MONTHLY) }));
    } else if (form.frequency === "annual") {
      setForm((f) => ({ ...f, amount: String(FIXED_ANNUAL) }));
    } else {
      setForm((f) => ({ ...f, amount: "" }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form.frequency]);

  // Simple validation before moving forward
  const validateStep = () => {
    setError("");
    if (step === 1) {
      if (!form.firstName.trim() || !form.lastName.trim()) {
        setError("Please provide your full name.");
        return false;
      }
      if (!form.email || !/^\S+@\S+\.\S+$/.test(form.email)) {
        setError("Please enter a valid email address.");
        return false;
      }
    }

    if (step === 2) {
      const amt = Number(form.amount);
      if (!amt || amt <= 0) {
        setError("Please enter a valid donation amount.");
        return false;
      }
    }

    if (step === 3) {
      if (!form.paymentMethod) {
        setError("Please select a payment method.");
        return false;
      }
    }

    return true;
  };

  const next = () => {
    if (!validateStep()) return;
    setError("");
    setStep((s) => Math.min(s + 1, 5));
  };

  const back = () => {
    setError("");
    setStep((s) => Math.max(s - 1, 1));
  };

  // Paystack inline payment
  const startPaystack = () => {
    setError("");
    const pubKey = import.meta.env.VITE_PAYSTACK_PUBLIC_KEY;
    if (!pubKey) {
      setError("Paystack public key not configured. Contact admin.");
      return;
    }

    const amountValue = Math.round(Number(form.amount) * 100); // convert to pesewas
    if (!amountValue || amountValue <= 0) {
      setError("Invalid amount.");
      return;
    }

    // Ensure Paystack script is loaded
    if (!window.PaystackPop) {
      setError("Payment library not loaded. Please try again later.");
      return;
    }

    setLoading(true);

    const handler = window.PaystackPop.setup({
      key: pubKey,
      email: form.email,
      amount: amountValue,
      currency: import.meta.env.VITE_PAYSTACK_CURRENCY || "GHS",
      metadata: {
        custom_fields: [
          { display_name: "Full Name", variable_name: "full_name", value: `${form.firstName} ${form.lastName}` },
          { display_name: "Phone", variable_name: "phone", value: form.phone || "" },
          { display_name: "Frequency", variable_name: "frequency", value: form.frequency },
          { display_name: "Payment Method", variable_name: "payment_method", value: form.paymentMethod },
        ],
      },
      callback: function (response) {
        // Payment was successful
        setLoading(false);
        setStep(5); // Complete
        // Optionally you can call your backend here to verify the transaction
        // send response.reference to backend for verification
      },
      onClose: function () {
        setLoading(false);
        // User closed the payment window
      },
    });

    handler.openIframe();
  };

  // On final confirm: start Paystack
  const confirmAndPay = () => {
    // final validation
    if (!validateStep()) return;
    startPaystack();
  };

  // UI pieces
  const StepIndicator = () => {
    const labels = ["Personal", "Donation", "Payment", "Review", "Complete"];
    return (
      <div className="flex items-center gap-4 mb-6">
        {labels.map((lab, i) => {
          const index = i + 1;
          const isActive = step === index;
          const isDone = step > index;
          return (
            <div key={lab} className="flex-1 min-w-0">
              <div className="flex items-center gap-3">
                <div className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold ${isDone ? "bg-green-600 text-white" : isActive ? "border-2 border-green-700 text-green-700" : "bg-gray-200 text-gray-600"}`}>
                  {index}
                </div>
                <div className="text-sm truncate">{lab}</div>
              </div>
              {i < labels.length - 1 && (
                <div className={`h-1 mt-3 ${step > index ? "bg-green-600" : "bg-gray-200"} rounded-full`} />
              )}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* overlay */}
      <div className="absolute inset-0 bg-black/60" onClick={onClose} aria-hidden="true" />

      <div className="relative bg-white w-full max-w-2xl rounded-xl shadow-2xl p-6 md:p-8 z-60 overflow-auto max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-black text-2xl"
          aria-label="Close donation form"
        >
          ✕
        </button>

        <StepIndicator />

        {error && <div className="mb-4 text-red-600 text-sm">{error}</div>}

        {/* Step 1: Personal */}
        {step === 1 && (
          <div>
            <h3 className="text-xl font-semibold mb-4">Personal Details</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                value={form.firstName}
                onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                placeholder="First name"
                className="p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-100"
              />
              <input
                value={form.lastName}
                onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                placeholder="Last name"
                className="p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-100"
              />
            </div>

            <input
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              type="email"
              placeholder="Email address"
              className="mt-4 p-3 rounded-lg border border-gray-200 w-full focus:outline-none focus:ring-2 focus:ring-green-100"
            />

            <input
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              placeholder="Phone (optional)"
              className="mt-4 p-3 rounded-lg border border-gray-200 w-full focus:outline-none focus:ring-2 focus:ring-green-100"
            />

            <div className="mt-6 flex gap-3">
              <button onClick={next} className="flex-1 bg-green-700 text-white p-3 rounded-lg shadow">
                Next
              </button>
              <button onClick={onClose} className="px-4 py-3 rounded-lg border">
                Cancel
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Donation */}
        {step === 2 && (
          <div>
            <h3 className="text-xl font-semibold mb-4">Donation Details</h3>

            <label className="block mb-2 text-sm font-medium">Donation Frequency</label>
            <div className="flex gap-3 mb-4">
              <button
                onClick={() => setForm({ ...form, frequency: "one-time" })}
                className={`flex-1 p-3 rounded-lg border ${form.frequency === "one-time" ? "border-green-700 bg-green-50" : "border-gray-200"}`}
              >
                One-time
              </button>
              <button
                onClick={() => setForm({ ...form, frequency: "monthly" })}
                className={`flex-1 p-3 rounded-lg border ${form.frequency === "monthly" ? "border-green-700 bg-green-50" : "border-gray-200"}`}
              >
                Monthly
              </button>
              <button
                onClick={() => setForm({ ...form, frequency: "annual" })}
                className={`flex-1 p-3 rounded-lg border ${form.frequency === "annual" ? "border-green-700 bg-green-50" : "border-gray-200"}`}
              >
                Annual
              </button>
            </div>

            {form.frequency === "one-time" ? (
              <div>
                <label className="block mb-2 text-sm font-medium">Amount (GHS)</label>
                <input
                  value={form.amount}
                  onChange={(e) => setForm({ ...form, amount: e.target.value })}
                  type="number"
                  min="1"
                  placeholder="Enter amount"
                  className="w-full p-3 rounded-lg border border-gray-200"
                />
              </div>
            ) : (
              <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
                {form.frequency === "monthly" ? (
                  <div>
                    <div className="text-sm text-gray-600">Monthly donation amount</div>
                    <div className="text-2xl font-semibold mt-2">GHS {FIXED_MONTHLY}</div>
                  </div>
                ) : (
                  <div>
                    <div className="text-sm text-gray-600">Annual donation amount</div>
                    <div className="text-2xl font-semibold mt-2">GHS {FIXED_ANNUAL}</div>
                  </div>
                )}
              </div>
            )}

            <div className="mt-6 flex justify-between gap-3">
              <button onClick={back} className="px-4 py-3 rounded-lg border">
                Back
              </button>
              <button onClick={next} className="px-6 py-3 rounded-lg bg-green-700 text-white">
                Next
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Payment method */}
        {step === 3 && (
          <div>
            <h3 className="text-xl font-semibold mb-4">Payment Method</h3>

            <label className="block mb-2 text-sm font-medium">Choose method</label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <button
                onClick={() => setForm({ ...form, paymentMethod: "mobile-money" })}
                className={`p-3 rounded-lg border text-left ${form.paymentMethod === "mobile-money" ? "border-green-700 bg-green-50" : "border-gray-200"}`}
              >
                <div className="font-semibold">Mobile Money</div>
                <div className="text-sm text-gray-600">Easy via local mobile wallets</div>
              </button>

              <button
                onClick={() => setForm({ ...form, paymentMethod: "card" })}
                className={`p-3 rounded-lg border text-left ${form.paymentMethod === "card" ? "border-green-700 bg-green-50" : "border-gray-200"}`}
              >
                <div className="font-semibold">Card</div>
                <div className="text-sm text-gray-600">Visa / Mastercard</div>
              </button>

              <button
                onClick={() => setForm({ ...form, paymentMethod: "bank-transfer" })}
                className={`p-3 rounded-lg border text-left ${form.paymentMethod === "bank-transfer" ? "border-green-700 bg-green-50" : "border-gray-200"}`}
              >
                <div className="font-semibold">Bank Transfer</div>
                <div className="text-sm text-gray-600">Manual bank transfer</div>
              </button>
            </div>

            <div className="mt-6 flex justify-between gap-3">
              <button onClick={back} className="px-4 py-3 rounded-lg border">
                Back
              </button>
              <button onClick={next} className="px-6 py-3 rounded-lg bg-green-700 text-white">
                Next
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Review */}
        {step === 4 && (
          <div>
            <h3 className="text-xl font-semibold mb-4">Review & Confirm</h3>

            <div className="space-y-3 p-4 border rounded-lg bg-gray-50">
              <div><strong>Name:</strong> {form.firstName} {form.lastName}</div>
              <div><strong>Email:</strong> {form.email}</div>
              <div><strong>Phone:</strong> {form.phone || "—"}</div>
              <div><strong>Frequency:</strong> {form.frequency}</div>
              <div><strong>Amount:</strong> GHS {form.amount}</div>
              <div><strong>Payment method:</strong> {form.paymentMethod}</div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <button onClick={back} className="px-4 py-3 rounded-lg border w-full">
                Back
              </button>

              <button
                onClick={confirmAndPay}
                className="px-6 py-3 rounded-lg bg-green-700 text-white w-full"
                disabled={loading}
              >
                {loading ? "Processing..." : "Confirm & Pay"}
              </button>
            </div>
          </div>
        )}

        {/* Step 5: Complete */}
        {step === 5 && (
          <div className="text-center py-8">
            <svg className="mx-auto w-14 h-14 text-green-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>

            <h3 className="text-2xl font-bold text-green-700 mb-2">Thank you!</h3>
            <p className="text-gray-600 mb-6">Your donation was successful. A receipt has been sent to your email.</p>

            <div className="flex justify-center gap-3">
              <button onClick={onClose} className="px-6 py-3 rounded-lg bg-green-700 text-white">Close</button>
              <button onClick={() => { setStep(1); setForm({ firstName: "", lastName: "", email: "", frequency: "one-time", amount: "", paymentMethod: "card", phone: "" }); }} className="px-6 py-3 rounded-lg border">Make another donation</button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
