import { Glow, GlowArea } from "@/components/glow";
import { SignIn } from "@/components/sign-in";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function SignInPage() {
  return (
    <section className="py-10 min-h-screen flex flex-col ">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4 text-white">Welcome to Our Platform</h1>
        <p className="text-xl text-muted-foreground">Sign in to continue</p>
      </div>
      <GlowArea className="flex gap-8 items-center justify-center lg:py-20 flex-col lg:flex-row">
        <Glow color="pink" className="rounded-xl transition-transform hover:scale-105 shadow-lg">
          <div className="w-80 rounded-xl shadow-2xl p-8">
            <div className="text-center">
              <Button className="mb-4">
                <div className="text-3xl font-bold">Sign In</div>
              </Button>
            </div>
            <div>
              <SignIn />
            </div>
          </div>
        </Glow>
      </GlowArea>
    </section>
  );
}
