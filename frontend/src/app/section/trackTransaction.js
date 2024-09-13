export default function FindTransaction() {
  return (
    <div className="py-12 px-20 space-y-6">
      <div className="space-y-4">
        <h1 className="text-secondary-foreground text-4xl font-semibold">Cari pesanan kamu!</h1>
        <p className="text-secondary-foreground text-sm">Lacak transaksi kamu dengan cara memasukkan Nomor Invoice dibawah ini:</p>
      </div>
      <div>
        <form className="flex flex-col items-start">
        <p className="text-secondary-foreground text-xs">Nomor Invoice Kamu</p>
          <input 
            className="mt-2 rounded-md p-2 text-xs w-1/2 bg-input placeholder:text-secondary-foreground
            text-secondary-foreground border-2 border-transparent focus:border-primary focus:outline-none"
            placeholder="OSXXXXXXXXXXXXXX">
          </input>
          <button className="mt-4 rounded-md bg-primary px-2 py-2 flex items-center hover:bg-primary/50 duration-500">
            <svg className="h-4 w-5 text-white group-hover:text-primary" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
            <span className="text-secondary-foreground text-sm">Cari Transaksi</span>
          </button>
        </form>
      </div>
    </div>
  )
}