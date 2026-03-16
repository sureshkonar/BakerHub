"use client";

import { useState } from "react";
import Image from "next/image";
import { products } from "@/lib/data";

const initialState = {
  customerName: "",
  phone: "",
  productId: products[0]?.id ?? "",
  quantity: 1,
  pickupDate: "",
  instructions: "",
};

export default function OrderForm() {
  const [form, setForm] = useState(initialState);
  const [paymentFile, setPaymentFile] = useState<File | null>(null);
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setStatus("submitting");
    setMessage("");

    try {
      await new Promise((resolve) => setTimeout(resolve, 700));

      if (!paymentFile) {
        throw new Error("Please upload a payment screenshot.");
      }

      setStatus("success");
      setMessage("Order received! Waiting for confirmation.");
      setForm(initialState);
      setPaymentFile(null);
    } catch (err) {
      setStatus("error");
      setMessage(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]"
    >
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
        <h2 className="text-xl font-semibold text-white">Order Details</h2>
        <div className="mt-6 grid gap-4">
          <input
            name="customerName"
            value={form.customerName}
            onChange={handleChange}
            placeholder="Customer Name"
            className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:border-[var(--accent)]"
            required
          />
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:border-[var(--accent)]"
            required
          />
          <select
            name="productId"
            value={form.productId}
            onChange={(event) =>
              setForm((prev) => ({ ...prev, productId: event.target.value }))
            }
            className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:border-[var(--accent)]"
          >
            {products.map((product) => (
              <option key={product.id} value={product.id}>
                {product.name} - ₹{product.price}
              </option>
            ))}
          </select>
          <input
            name="quantity"
            type="number"
            min={1}
            value={form.quantity}
            onChange={handleChange}
            placeholder="Quantity"
            className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:border-[var(--accent)]"
            required
          />
          <input
            name="pickupDate"
            type="date"
            value={form.pickupDate}
            onChange={handleChange}
            className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:border-[var(--accent)]"
            required
          />
          <textarea
            name="instructions"
            value={form.instructions}
            onChange={handleChange}
            placeholder="Special Instructions"
            className="h-28 rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:border-[var(--accent)]"
          />
        </div>
      </div>

      <div className="space-y-6">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-lg font-semibold text-white">UPI Payment</h3>
          <p className="mt-2 text-sm text-white/60">
            Scan the QR or pay to UPI ID and upload your payment screenshot.
          </p>
          <div className="mt-6 flex flex-col items-center gap-3">
            <div className="relative h-40 w-40 overflow-hidden rounded-2xl border border-white/10">
              <Image src="/upi-qr.svg" alt="UPI QR" fill className="object-cover" />
            </div>
            <p className="text-sm text-white/80">UPI ID: bakerhub@upi</p>
            <p className="text-xs text-white/40">Amount is confirmed on call.</p>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <label className="text-sm text-white/70">Payment Screenshot</label>
          <input
            type="file"
            accept="image/*"
            onChange={(event) => setPaymentFile(event.target.files?.[0] ?? null)}
            className="mt-3 w-full text-sm text-white/70"
          />
          <button
            type="submit"
            disabled={status === "submitting"}
            className="mt-6 w-full rounded-2xl bg-[var(--accent)] px-4 py-3 text-sm font-semibold text-black transition hover:brightness-110 disabled:opacity-70"
          >
            {status === "submitting" ? "Submitting..." : "Submit Order"}
          </button>
          {message && (
            <p
              className={`mt-4 text-sm ${
                status === "error" ? "text-red-300" : "text-emerald-200"
              }`}
            >
              {message}
            </p>
          )}
          <p className="mt-3 text-xs text-white/40">
            Demo mode: orders are not stored. Connect a backend later to save
            orders and screenshots.
          </p>
        </div>
      </div>
    </form>
  );
}
