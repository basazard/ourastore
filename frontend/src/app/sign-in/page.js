"use client";
import AuthLayout from "../components/authLayout";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { AuthContext } from "../context/authContext";
import { jwtDecode } from "jwt-decode";
import { AuthInput } from "../sign-up/components/authField";
import {
  HidePasswordIcon,
  LockIcon,
  RegisterIcon,
  ShowPasswordIcon,
} from "../sign-up/components/icon";
import { AuthButton, NavigationButton } from "../sign-up/components/button";

export default function SignIn() {
  const [password, setPassword] = useState(true);
  const { setAuthenticated, setRole } = useContext(AuthContext);
  const router = useRouter();

  const toggleHidePassword = () => {
    setPassword(!password);
  };

  async function loginSubmit(e) {
    e.preventDefault();
    const baseUrl = process.env.NEXT_PUBLIC_BE_API_URL;
    const formData = new FormData(e.target);
    const formObject = {};

    formData.forEach((value, key) => {
      formObject[key] = value;
    });

    try {
      const res = await fetch(`${baseUrl}/users/login`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(formObject),
      });

      const toastId = toast.loading("Submitting form...");

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
      localStorage.setItem("accessToken", data.access_token);
      const decodedToken = jwtDecode(data.access_token);
      setRole(decodedToken.role);
      setAuthenticated(true);
      router.push("/");

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

  return (
    <AuthLayout>
      <form onSubmit={loginSubmit}>
        <div className="p-16 sm:p-24 text-secondary-foreground">
          <div className="space-y-2">
            <h1 className="text-3xl font-medium">Masuk</h1>
            <p className="text-sm font-extralight">
              Masuk dengan akun yang telah Anda daftarkan.
            </p>
          </div>
          <div className="mt-6">
            <div className="flex flex-col gap-2.5">
              <div className="flex flex-col font-light">
                <AuthInput label="Username" formName="username" type="text" />
              </div>
              <div className="flex flex-col font-light">
                <span className="text-xs">Password</span>
                <div className="mt-1 relative flex items-center justify-center">
                  <input
                    className="rounded-md p-2 text-xs bg-input w-full placeholder:text-secondary-foreground
                      text-secondary-foreground border-2 border-transparent focus:border-primary focus:outline-none"
                    type={password ? "password" : "text"}
                    placeholder="Kata sandi"
                    required
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
            </div>
          </div>
          <div className="mt-4 flex flex-row justify-between">
            <div className="items-center flex flex-row gap-2">
              <input
                type="checkbox"
                className="accent-primary"
                required
              ></input>
              <span className="text-xs font-extralight">Ingat akun ku</span>
            </div>
            <span className="text-sm font-light text-primary hover:text-primary/50">
              Lupa kata sandi mu?
            </span>
          </div>
          <div className="mt-4 flex flex-col text-center gap-4">
            <AuthButton
              icon={LockIcon}
              label="Masuk"
              className="text-secondary-foreground"
            />
            <span className="text-sm font-extralight">
              Belum memiliki akun?
            </span>
            <NavigationButton
              icon={RegisterIcon}
              href="/sign-up"
              label="Daftar"
              className="text-secondary group-hover:text-secondary-foreground duration-500 ease-in-out"
            />
          </div>
        </div>
      </form>
    </AuthLayout>
  );
}
