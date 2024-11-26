"use client";

import { useActionState, useCallback, useEffect } from "react";
import { Button } from "@site/components/ui/button";
import { toast } from "sonner";
import { useRouter } from "next/navigation";


export default function Login() {
  const router = useRouter()

  const [state, formAction, isPending] = useActionState(
    useCallback(
      async (_, formData) => {
        const email = formData.get('email')
        const password = formData.get('password')
        const { errors, user } = await (await fetch("/api/users/login", {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password
          }),
        })).json()
        if (errors && errors?.length) {
          toast.error(errors[0].message)
          return null
        }
        if (user.role === 'admin') {
          router.push('/admin')
          return null

        }
        router.push('/')
      }, []), { email: '', password: '' });

  const onCheckLogin = async () => {
    const res = await (await fetch("/api/users/me")).json()
    if (!res.user) {
      return
    }
    if (res.user.role === 'admin') {
      router.replace('/admin')
      return
    }
    router.replace('/')
  }

  useEffect(() => { onCheckLogin() }, [])

  return (
    <main className="w-full h-screen flex flex-col items-center px-4 pt-20">
      <div className="max-w-sm w-full text-gray-600">
        <div className="text-center">
          <div className="mt-5 space-y-2">
            <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">Log in to your account</h3>
            {/* <p className="">Don't have an account? <Link href="javascript:void(0)" className="font-medium text-indigo-600 hover:text-indigo-500">Sign up</Link></p> */}
          </div>
        </div>
        <form
          className="mt-8 space-y-5"
        >
          <div>
            <label className="font-medium">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            />
          </div>
          <div>
            <label className="font-medium">
              Password
            </label>
            <input
              type="password"
              name="password"
              required
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            />
          </div>
          <Button formAction={formAction} disabled={isPending} className="w-full">
            Sign in
          </Button>
          {/* <div className="text-center">
            <Link href="javascript:void(0)" className="hover:text-indigo-600">Forgot password?</Link>
          </div> */}
        </form>
      </div>
    </main>
  )
}