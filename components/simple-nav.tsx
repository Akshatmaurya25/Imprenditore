import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function SimpleNav() {
  return (
    <nav className="w-full flex justify-end p-4 bg-white shadow">
      <Link href="/register">
        <Button className="bg-green-700 hover:bg-green-800 text-white rounded-full px-6">
          Register Now
        </Button>
      </Link>
    </nav>
  );
}