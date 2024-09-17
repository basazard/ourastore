"use client";
import AuthLayout from "../components/authLayout";
import Link from "next/link";
import { useState } from "react";

export default function SignUp() {
  const [match, setMatch] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    const baseUrl = process.env.NEXT_PUBLIC_BE_API_URL;
    const formData = new FormData(e.target);
    const formObject = {};
    const checkPasswordMatch =
      formData.get("password") === formData.get("confirmPassword");

    if (!checkPasswordMatch) {
      setMatch(true);
      return;
    }

    formData.delete("confirmPassword");
    formData.forEach((value, key) => {
      formObject[key] = value;
    });
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BE_API_URL}/users/register`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify(formObject),
        }
      );
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }

  const [password, setPassword] = useState(true);
  const [confirmPassword, setConfirmPassword] = useState(true);

  const toggleHidePassword = () => {
    setPassword(!password);
  };
  const toggleHideConfirmPassword = () => {
    setConfirmPassword(!confirmPassword);
  };

  return (
    <AuthLayout>
      <form onSubmit={onSubmit}>
        <div className="px-24 py-16 text-secondary-foreground">
          <div className="space-y-2">
            <h1 className="text-3xl font-medium">Daftar</h1>
            <p className="text-sm font-extralight">
              Masukkan informasi pendaftaran yang valid.
            </p>
          </div>
          <div className="mt-6">
            <div className="flex flex-col gap-2.5 font-light">
              <div className="flex flex-row gap-2.5">
                <div className="w-1/2">
                  <span className="text-xs">Nama Lengkap</span>
                  <input
                    className="mt-1 rounded-md p-2 text-xs w-full bg-input placeholder:text-secondary-foreground
                  text-secondary-foreground border-2 border-transparent focus:border-primary focus:outline-none"
                    placeholder="Nama Lengkap"
                    required
                    name="fullname"
                  ></input>
                </div>
                <div className="w-1/2">
                  <span className="text-xs">Username</span>
                  <input
                    className="mt-1 rounded-md p-2 text-xs w-full bg-input placeholder:text-secondary-foreground
                  text-secondary-foreground border-2 border-transparent focus:border-primary focus:outline-none"
                    placeholder="Username"
                    required
                    name="username"
                  ></input>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xs">Alamat Email</span>
                <input
                  className="mt-1 rounded-md p-2 text-xs bg-input placeholder:text-secondary-foreground
                    text-secondary-foreground border-2 border-transparent focus:border-primary focus:outline-none"
                  placeholder="Alamat email"
                  required
                  name="email"
                ></input>
              </div>
              <div className="flex flex-col">
                <span className="text-xs">Nomor whatsapp</span>
                <input
                  className="mt-1 rounded-md p-2 text-xs bg-secondary placeholder:text-secondary-foreground
                    text-secondary-foreground border-2 border-transparent focus:border-primary focus:outline-none"
                  placeholder="Nomor whatsapp"
                  required
                  type="number"
                  name="phone"
                ></input>
              </div>
              <div className="flex flex-row gap-2.5">
                <div className="w-1/2">
                  <span className="text-xs">Kata sandi</span>
                  <div className="mt-1 relative flex items-center justify-center">
                    <input
                      className="rounded-md p-2 text-xs w-full bg-input placeholder:text-secondary-foreground
                    text-secondary-foreground border-2 border-transparent focus:border-primary focus:outline-none"
                      placeholder="Kata sandi"
                      required
                      type={password ? "password" : "text"}
                      name="password"
                    ></input>
                    <button
                      type="button"
                      className="absolute right-4 h-full"
                      onClick={toggleHidePassword}
                    >
                      {password ? (
                        <svg
                          className="h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          height="24px"
                          viewBox="0 0 24 24"
                          width="24px"
                          fill="currentColor"
                        >
                          <path
                            d="M0 0h24v24H0V0zm0 0h24v24H0V0zm0 0h24v24H0V0zm0 0h24v24H0V0z"
                            fill="none"
                          />
                          <path d="M12 6c3.79 0 7.17 2.13 8.82 5.5-.59 1.22-1.42 2.27-2.41 3.12l1.41 1.41c1.39-1.23 2.49-2.77 3.18-4.53C21.27 7.11 17 4 12 4c-1.27 0-2.49.2-3.64.57l1.65 1.65C10.66 6.09 11.32 6 12 6zm-1.07 1.14L13 9.21c.57.25 1.03.71 1.28 1.28l2.07 2.07c.08-.34.14-.7.14-1.07C16.5 9.01 14.48 7 12 7c-.37 0-.72.05-1.07.14zM2.01 3.87l2.68 2.68C3.06 7.83 1.77 9.53 1 11.5 2.73 15.89 7 19 12 19c1.52 0 2.98-.29 4.32-.82l3.42 3.42 1.41-1.41L3.42 2.45 2.01 3.87zm7.5 7.5l2.61 2.61c-.04.01-.08.02-.12.02-1.38 0-2.5-1.12-2.5-2.5 0-.05.01-.08.01-.13zm-3.4-3.4l1.75 1.75c-.23.55-.36 1.15-.36 1.78 0 2.48 2.02 4.5 4.5 4.5.63 0 1.23-.13 1.77-.36l.98.98c-.88.24-1.8.38-2.75.38-3.79 0-7.17-2.13-8.82-5.5.7-1.43 1.72-2.61 2.93-3.53z" />
                        </svg>
                      ) : (
                        <svg
                          className="h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          height="24px"
                          viewBox="0 0 24 24"
                          width="24px"
                          fill="currentColor"
                        >
                          <path d="M0 0h24v24H0V0z" fill="none" />
                          <path d="M12 6c3.79 0 7.17 2.13 8.82 5.5C19.17 14.87 15.79 17 12 17s-7.17-2.13-8.82-5.5C4.83 8.13 8.21 6 12 6m0-2C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 5c1.38 0 2.5 1.12 2.5 2.5S13.38 14 12 14s-2.5-1.12-2.5-2.5S10.62 9 12 9m0-2c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7z" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>
                <div className="w-1/2">
                  <span className="text-xs">Konfirmasi kata sandi</span>
                  <div className="mt-1 relative flex items-center justify-center">
                    <input
                      className="rounded-md p-2 text-xs w-full bg-input placeholder:text-secondary-foreground
                    text-secondary-foreground border-2 border-transparent focus:border-primary focus:outline-none"
                      placeholder="Konfirmasi kata sandi"
                      required
                      type={confirmPassword ? "password" : "text"}
                      name="confirmPassword"
                    ></input>
                    <button
                      type="button"
                      className="absolute right-4 h-full"
                      onClick={toggleHideConfirmPassword}
                    >
                      {confirmPassword ? (
                        <svg
                          className="h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          height="24px"
                          viewBox="0 0 24 24"
                          width="24px"
                          fill="currentColor"
                        >
                          <path
                            d="M0 0h24v24H0V0zm0 0h24v24H0V0zm0 0h24v24H0V0zm0 0h24v24H0V0z"
                            fill="none"
                          />
                          <path d="M12 6c3.79 0 7.17 2.13 8.82 5.5-.59 1.22-1.42 2.27-2.41 3.12l1.41 1.41c1.39-1.23 2.49-2.77 3.18-4.53C21.27 7.11 17 4 12 4c-1.27 0-2.49.2-3.64.57l1.65 1.65C10.66 6.09 11.32 6 12 6zm-1.07 1.14L13 9.21c.57.25 1.03.71 1.28 1.28l2.07 2.07c.08-.34.14-.7.14-1.07C16.5 9.01 14.48 7 12 7c-.37 0-.72.05-1.07.14zM2.01 3.87l2.68 2.68C3.06 7.83 1.77 9.53 1 11.5 2.73 15.89 7 19 12 19c1.52 0 2.98-.29 4.32-.82l3.42 3.42 1.41-1.41L3.42 2.45 2.01 3.87zm7.5 7.5l2.61 2.61c-.04.01-.08.02-.12.02-1.38 0-2.5-1.12-2.5-2.5 0-.05.01-.08.01-.13zm-3.4-3.4l1.75 1.75c-.23.55-.36 1.15-.36 1.78 0 2.48 2.02 4.5 4.5 4.5.63 0 1.23-.13 1.77-.36l.98.98c-.88.24-1.8.38-2.75.38-3.79 0-7.17-2.13-8.82-5.5.7-1.43 1.72-2.61 2.93-3.53z" />
                        </svg>
                      ) : (
                        <svg
                          className="h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          height="24px"
                          viewBox="0 0 24 24"
                          width="24px"
                          fill="currentColor"
                        >
                          <path d="M0 0h24v24H0V0z" fill="none" />
                          <path d="M12 6c3.79 0 7.17 2.13 8.82 5.5C19.17 14.87 15.79 17 12 17s-7.17-2.13-8.82-5.5C4.83 8.13 8.21 6 12 6m0-2C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 5c1.38 0 2.5 1.12 2.5 2.5S13.38 14 12 14s-2.5-1.12-2.5-2.5S10.62 9 12 9m0-2c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7z" />
                        </svg>
                      )}
                    </button>
                  </div>
                  {match ? (
                    <div className="pl-1">
                      <span className="text-xs text-start text-red-500">
                        Password harus sama dengan konfirmasi password
                      </span>
                    </div>
                  ) : (
                    <span></span>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 flex flex-row justify-between">
            <div className="items-center flex flex-row gap-2">
              <input
                type="checkbox"
                className="accent-primary"
                required
              ></input>
              <span className="text-xs font-extralight">
                Saya setuju dengan{" "}
                <span className="text-primary">Syarat dan Ketentuan</span> dan{" "}
                <span className="text-primary">Kebijakan Pribadi</span>.
              </span>
            </div>
          </div>
          <div className="mt-4 flex flex-col text-center gap-4">
            <button
              type="submit"
              className="group relative items-center justify-center bg-primary p-2 rounded-md text-sm hover:bg-primary/50 duration-500 ease-in-out"
            >
              <span className="absolute left-2">
                <svg
                  className="text-secondary-foreground"
                  xmlns="http://www.w3.org/2000/svg"
                  height="18px"
                  viewBox="0 0 24 24"
                  width="18px"
                  fill="currentColor"
                >
                  <g fill="none">
                    <path d="M0 0h24v24H0V0z" />
                    <path d="M0 0h24v24H0V0z" opacity=".87" />
                  </g>
                  <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" />
                </svg>
              </span>
              Daftar
            </button>
            <span className="text-sm font-extralight">
              Sudah memiliki akun?
            </span>
            <Link
              href="/sign-in"
              className="group relative items-center justify-center bg-muted p-2 rounded-md text-sm hover:bg-muted/50 duration-500 ease-in-out"
            >
              <span className="absolute left-2">
                <svg
                  className="text-secondary group-hover:text-secondary-foreground duration-500 ease-in-out"
                  xmlns="http://www.w3.org/2000/svg"
                  height="18px"
                  viewBox="0 0 24 24"
                  width="18px"
                  fill="currentColor"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 8c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm-6 4c.22-.72 3.31-2 6-2 2.7 0 5.8 1.29 6 2H9zm-3-3v-3h3v-2H6V7H4v3H1v2h3v3z" />
                </svg>
              </span>
              Masuk
            </Link>
          </div>
        </div>
      </form>
    </AuthLayout>
  );
}
