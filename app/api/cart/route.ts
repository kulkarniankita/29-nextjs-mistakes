import { cart } from "@/lib/cart";

export async function GET() {
  return new Response(JSON.stringify(cart));
}
