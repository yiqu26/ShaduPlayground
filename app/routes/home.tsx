import { Button } from "~/components/ui/button"
import { TextScroll } from "~/components/ui/text-scroll"
import type { Route } from "./+types/home"
import { GalleryVerticalEnd } from "lucide-react"
import { LoginForm } from "~/components/login-form"

import {
  Bell,
  FileText,
  HelpCircle,
  House,
  Lock,
  Mail,
  Settings,
  Shield,
  User,
} from "lucide-react"
import { ExpandedTabs } from "~/components/ui/expanded-tabs"

const tabs = [
  { title: "Dashboard", icon: House },
  { title: "Notifications", icon: Bell },
  { type: "separator" as const },
  { title: "Settings", icon: Settings },
  { title: "Support", icon: HelpCircle },
  { title: "Security", icon: Shield },
]
export function meta({ }: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ]
}

export default function Home() {
  return (

    <div className="flex flex-col items-center justify-center min-h-svh">

      <div className="grid min-h-svh lg:grid-cols-2">

        <div className="flex flex-col gap-4 p-6 md:p-10">
          <TextScroll
            className="font-display text-center text-4xl font-semibold tracking-tighter  text-black dark:text-white md:text-7xl md:leading-[5rem]"
            text="Well Done!"
            default_velocity={2}
          />
          <div className="flex justify-center gap-2 md:justify-start">

            <a href="#" className="flex items-center gap-2 font-medium">
              <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
                <GalleryVerticalEnd className="size-4" />
              </div>
              Acme Inc.
            </a>
          </div>
          <div className="flex flex-1 items-center justify-center">
            <div className="w-full max-w-xs">
              <LoginForm />
            </div>
          </div>
        </div>
        <div className="bg-muted relative hidden lg:block">
          <img
            src="../../homebanner.jpg"
            alt="Image"
            className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
          />
        </div>


      </div>
      <ExpandedTabs
        tabs={tabs}
        activeColor="text-blue-500"
        className="border-blue-200 dark:border-blue-800"
      />
    </div>


  )
}
