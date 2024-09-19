export default function AccountInfo() {
  return (
    <div className="text-secondary-foreground bg-card rounded-md">
      <div className="flex flex-row items-center gap-4">
        <div className="flex flex-row h-10 w-10 items-center justify-center bg-primary rounded-tl-md">
          <span>1</span>
        </div>
        <div>
          <span className="text-sm">Masukkan Data Akun</span>
        </div>
      </div>
      <div className="bg-muted rounded-b-md text-xs font-extralight">
        <div className="p-4">
          <div className="flex flex-col gap-4">
            <div className="flex flex-row gap-4">
              <div className="flex flex-col w-1/2">
                <span>ID</span>
                <input
                  className="mt-2 rounded-md p-2 text-xs w-full bg-input border-2 border-transparent 
                  focus:border-primary focus:outline-none"
                  placeholder="Ketikan ID"
                ></input>
              </div>
              <div className="flex flex-col w-1/2">
                <span>Server</span>
                <input
                  className="mt-2 rounded-md p-2 text-xs w-full bg-input border-2 border-transparent 
                  focus:border-primary focus:outline-none"
                  placeholder="Ketikan Server"
                ></input>
              </div>
            </div>
            <div>
              <span className="italic">
                Untuk menemukan ID & Server akun Anda, klik avatar Anda di pojok
                kiri atas layar dan buka tab Info Umum. Contoh: 12345678 (9864),
                maka ID adalah 12345678 dan Server adalah 9864
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
