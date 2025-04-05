import SignOutButton from "../_components/SignOutButton";
import { auth } from "../_lib/auth";

export default async function Page() {
  const session = await auth();
  console.log(session);
  return (
    <main className="h-10/12 w-full bg-slate-50 text-center">
      <div className="h-12 px-2 py-14 text-center text-lg font-semibold sm:text-start lg:px-16 lg:text-3xl">
        <p className="sm:ml-10">خوش آمدید, {session?.user?.name}</p>
      </div>
      <form
        action=""
        className="flex w-full flex-col place-content-between justify-center space-y-3 px-2 py-14 text-base lg:w-2/3 lg:px-16"
      >
        <div className="flex w-full justify-around">
          <label htmlFor="text" className="text-sm">
            نام کاربری
          </label>
          <input
            type="text"
            className="w-1/2 rounded-full border-2 border-slate-700/50 px-3 py-0.5 text-base duration-300 placeholder:text-xs sm:py-1"
            placeholder="نام کاربری"
            name="text"
            defaultValue={session?.user?.name ?? ""}
            disabled={!!session?.user?.name}
          />
        </div>
        <div className="flex w-full justify-around">
          <label htmlFor="email" className="text-sm">
            ایمیل
          </label>
          <input
            type="email"
            className="w-1/2 rounded-full border-2 border-slate-700/50 px-3 py-0.5 text-base duration-300 placeholder:text-sm sm:py-1"
            placeholder="ایمیل"
            name="email"
            defaultValue={session?.user?.email ?? ""}
            disabled={!!session?.user?.name}
          />
        </div>
      </form>
      <SignOutButton classname="my-10 border-2 border-red-600 rounded-2xl py-1 px-2 w-8/12 md:hidden" />
    </main>
  );
}
