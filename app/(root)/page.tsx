import Hello from "@/app/components/hello";
export default function Home() {
  console.log('Server or Client')
  return (
      <>
    <h1 className="text-3xl">Welcome to Next.js</h1>
        <Hello />
      </>
  );
}
