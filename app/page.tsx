import Link from "@/node_modules/next/link";
// import connectDB from "@/config/database";

export default function Home() {
  // console.log(process.env.MONGODB_URI);
  // connectDB();
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Link href="/Pages/Homepage">home</Link>
      <Link href="/Pages/About">about</Link>
    </div>
  );
}
