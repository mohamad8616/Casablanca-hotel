export default function Page() {
  return (
    <main className="h-screen">
      <div className="h-12 px-16 py-14 text-3xl">
        <p>Welcome, USER</p>
      </div>
      <form action="">
        <div>
          <label htmlFor="">نام کاربری</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">ایمیل</label>
          <input type="email" />
        </div>
      </form>
    </main>
  );
}
