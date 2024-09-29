"use client";
import AuthLayout from "../components/authLayout";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
import { AuthDarkInput, AuthInput } from "./components/authField";
import {
  HidePasswordIcon,
  LockIcon,
  RegisterIcon,
  ShowPasswordIcon,
} from "./components/icon";
import { AuthButton, NavigationButton } from "./components/button";

export default function SignUp() {
  const [match, setMatch] = useState(false);
  const [password, setPassword] = useState(true);
  const [confirmPassword, setConfirmPassword] = useState(true);
  const router = useRouter();

  async function registerSubmit(e) {
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
      const res = await fetch(`${baseUrl}/users/register`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(formObject),
      });

      const toastId = toast.loading("Submitting your form...");

      if (!res.ok) {
        const data = await res.json();
        toast.update(toastId, {
          render: data.message,
          type: "error",
          isLoading: false,
          autoClose: 1000,
        });
      }

      const data = await res.json();
      router.push("/sign-in");

      toast.update(toastId, {
        render: data.message,
        type: "success",
        isLoading: false,
        autoClose: 1000,
      });
    } catch (err) {
      console.log(err);
    }
  }

  const toggleHidePassword = () => {
    setPassword(!password);
  };
  const toggleHideConfirmPassword = () => {
    setConfirmPassword(!confirmPassword);
  };

  return (
    <AuthLayout>
      <form onSubmit={registerSubmit}>
        <div className="px-12 sm:px-24 py-16 text-secondary-foreground">
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
                  <AuthInput
                    label="Nama Lengkap"
                    formName="fullname"
                    type="text"
                  />
                </div>
                <div className="w-1/2">
                  <AuthInput label="Username" formName="username" type="text" />
                </div>
              </div>
              <div className="flex flex-col">
                <AuthInput label="Alamat Email" formName="email" type="email" />
              </div>
              <div className="flex flex-col">
                <AuthDarkInput
                  label="Nomor whatsapp"
                  formName="phone"
                  type="number"
                />
              </div>
              <div className="flex flex-row gap-2.5">
                <div className="w-1/2">
                  <span className="text-xs">Kata sandi</span>
                  <div className="mt-1 relative flex items-center justify-center">
                    <input
                      className="rounded-md p-2 text-[8px] sm:text-xs w-full bg-input placeholder:text-secondary-foreground
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
                      {password ? <HidePasswordIcon /> : <ShowPasswordIcon />}
                    </button>
                  </div>
                </div>
                <div className="w-1/2">
                  <span className="text-xs">Konfirmasi kata sandi</span>
                  <div className="mt-1 relative flex items-center justify-center">
                    <input
                      className="rounded-md p-2 text-[8px] sm:text-xs w-full bg-input placeholder:text-secondary-foreground
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
                        <HidePasswordIcon />
                      ) : (
                        <ShowPasswordIcon />
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
            <AuthButton
              icon={RegisterIcon}
              label="Daftar"
              className="text-secondary-foreground"
            />
            <span className="text-sm font-extralight">
              Sudah memiliki akun?
            </span>
            <NavigationButton
              icon={LockIcon}
              href="sign-in"
              label="Masuk"
              className="text-secondary group-hover:text-secondary-foreground duration-500 ease-in-out"
            />
          </div>
        </div>
      </form>
    </AuthLayout>
  );
}
