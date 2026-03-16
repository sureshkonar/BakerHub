import OrderForm from "@/components/OrderForm";

export default function OrderPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-10 px-6 py-16">
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-white/50">
          Place Order
        </p>
        <h1 className="mt-2 text-3xl font-semibold text-white">
          Secure Your Fresh Bake
        </h1>
        <p className="mt-3 text-sm text-white/70">
          Fill in your order details, complete UPI payment, and upload the
          screenshot.
        </p>
      </div>
      <OrderForm />
    </div>
  );
}
