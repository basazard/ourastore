import AuthLayout from "../components/authLayout"

export default function SignIn() {
  return (
    <AuthLayout>
      <div className="space-y-2">
        <h1 className="text-3xl font-medium">Masuk</h1>
        <p className="text-sm font-extralight">Masuk dengan akun yang telah Anda daftarkan.</p>
      </div>
      <div className="mt-6">
        <form className="flex flex-col gap-2.5">
          <div className="flex flex-col font-light">
            <span className="text-xs">Username</span>
            <input 
                className="mt-1 rounded-md p-2 text-xs bg-input placeholder:text-secondary-foreground
                text-secondary-foreground border-2 border-transparent focus:border-primary focus:outline-none"
                placeholder="Username">
            </input>
          </div>
          <div className="flex flex-col font-light">
            <span className="text-xs">Password</span>
            <input 
                className="mt-1 rounded-md p-2 text-xs bg-input placeholder:text-secondary-foreground
                text-secondary-foreground border-2 border-transparent focus:border-primary focus:outline-none"
                placeholder="Password">
            </input>
          </div>
        </form>
      </div>
      <div className="mt-4 flex flex-row justify-between">
        <div className="items-center flex flex-row gap-2">
          <input type="checkbox">
          </input>
          <span className="text-xs font-extralight">Ingat akun ku</span>
        </div>
        <span className="text-sm font-light text-primary hover:text-primary/50">Lupa kata sandi mu?</span>
      </div>
      <div className="mt-4 flex flex-col text-center gap-4">
        <button className="relative items-center justify-center bg-primary p-2 rounded-md text-sm hover:bg-primary/50 duration-500 ease-in-out">
          <span className="absolute left-2">
            <svg className="text-secondary-foreground" xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 0 24 24" width="18px" fill="currentColor"><g fill="none"><path d="M0 0h24v24H0V0z"/><path d="M0 0h24v24H0V0z" opacity=".87"/></g><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/></svg>
          </span>
          Masuk
        </button>
        <span className="text-sm font-extralight">
          Belum memiliki akun?
        </span>
        <button className="group relative items-center justify-center bg-muted p-2 rounded-md text-sm group-hover:bg-muted/50 duration-500 ease-in-out">          
          <span className="absolute left-2">
            <svg className="text-secondary group-hover:text-secondary-foreground duration-500 ease-in-out" xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 0 24 24" width="18px" fill="currentColor"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 8c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm-6 4c.22-.72 3.31-2 6-2 2.7 0 5.8 1.29 6 2H9zm-3-3v-3h3v-2H6V7H4v3H1v2h3v3z"/></svg>              
          </span>
          Daftar
        </button>
      </div>
    </AuthLayout>
  )
}