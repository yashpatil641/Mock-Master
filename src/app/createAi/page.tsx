import { Glow, GlowArea } from "@/components/glow";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Plus, Settings, Eye } from "lucide-react";

const previousInterviews = [
  { id: 1, date: "June 15, 2023", score: "85%" },
  { id: 2, date: "June 10, 2023", score: "90%" },
  { id: 3, date: "May 25, 2023", score: "78%" },
  { id: 4, date: "May 10, 2023", score: "88%" },
  { id: 5, date: "April 30, 2023", score: "92%" },
];

export default function CreateNewMockInterview() {
  return (
    <div className="min-h-screen py-10 px-4 flex flex-col items-center">
      <div className="max-w-5xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white">Create Your AI Interview</h1>
          <p className="text-xl text-muted-foreground mt-4">
            Customize your experience and test your skills with our AI-powered mock interviews.
          </p>
        </div>

        <GlowArea className="flex gap-8 items-center justify-center lg:py-20 flex-col lg:flex-row">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Glow color="purple" className="rounded-xl transition-transform hover:scale-105 shadow-lg">
              <Card className="w-full h-96  rounded-xl shadow-2xl flex flex-col justify-between p-6">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold">New Mock Interview</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-muted-foreground mt-4">
                  Start a new AI-powered mock interview tailored to your needs.
                </CardContent>
                <CardFooter className="mt-6 flex flex-col gap-4">
                  <Button variant="outline" className="w-full flex items-center justify-center gap-2 py-3">
                    <Plus size={24} /> Create Interview
                  </Button>
                  <div className="flex gap-4">
                    <Button variant="outline" className="w-1/2 flex items-center justify-center gap-2 py-2">
                      <Settings size={20} /> Customize
                    </Button>
                    <Button variant="outline" className="w-1/2 flex items-center justify-center gap-2 py-2">
                      <Eye size={20} /> Preview
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </Glow>

            <Glow color="blue" className="rounded-xl transition-transform hover:scale-105 shadow-lg">
              <Card className="w-full h-96  rounded-xl shadow-2xl flex flex-col justify-between p-6">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold">Prebuilt Template</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-muted-foreground mt-4">
                  Use our pre-designed interview template to quickly get started.
                </CardContent>
                <CardFooter className="mt-6">
                  <Button variant="outline" className="w-full flex items-center justify-center gap-2 py-3">
                    <Plus size={24} /> Use Template
                  </Button>
                </CardFooter>
              </Card>
            </Glow>
          </div>
        </GlowArea>

        <h2 className="text-3xl font-bold text-white text-center mb-6">Your Previous Interviews</h2>
        <GlowArea color="bright-orange">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {previousInterviews.map((interview) => (
              <Glow key={interview.id} color="orange" className="rounded-xl transition-transform hover:scale-105 shadow-lg">
                <Card className="w-full h-80  rounded-xl shadow-2xl flex flex-col justify-between p-6">
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl font-bold">Interview {interview.id}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center text-muted-foreground mt-4">
                    Completed on <span className="font-semibold">{interview.date}</span> with a score of{" "}
                    <span className="font-semibold">{interview.score}</span>.
                  </CardContent>
                  <CardFooter className="mt-6">
                    <Button variant="outline" className="w-full flex items-center justify-center gap-2 py-3">
                      View Details
                    </Button>
                  </CardFooter>
                </Card>
              </Glow>
            ))}
          </div>
        </GlowArea>
      </div>
    </div>
  );
}
