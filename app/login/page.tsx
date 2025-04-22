import SignInButton from "../_components/SignInButton";

export default function Page() {
  return (
    <main className="flex h-[400px] items-center justify-center text-slate-800">
      <div className="mx-5 flex h-1/2 w-full flex-col items-center justify-between rounded-tr-md rounded-bl-md border-2 border-slate-800/20 px-4 py-3 shadow-lg shadow-slate-700/20 md:h-1/2 md:w-1/2">
        <h1 className="mt-3 font-semibold lg:text-2xl dark:text-stone-200">
          لطفا وارد حساب کاربری خود شوید
        </h1>
        <SignInButton />
      </div>
    </main>
  );
}
