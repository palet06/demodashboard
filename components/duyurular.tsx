import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Mails } from "lucide-react";
import { Button } from "./ui/button";

const Duyurular = () => {
  const initialFeatures = [
    {
      id: "1",
      title: "AI Voice Cloning",
      description:
        "Clone any voice with just 30 seconds of audio for personalized video narration",
      status: "shipped",
      version: "2.3.1",
      votes: 1247,
      userVoted: false,
    },
    {
      id: "2",
      title: "Real-time Collaboration",
      description:
        "Work together on video projects with live editing and instant feedback",
      status: "in-progress",
      votes: 892,
      userVoted: true,
    },
    {
      id: "3",
      title: "Advanced Motion Graphics",
      description:
        "Create stunning animations and transitions with AI-powered motion design",
      status: "in-progress",
      votes: 756,
      userVoted: false,
    },
    {
      id: "4",
      title: "4K Video Export",
      description:
        "Export videos in ultra-high definition with optimized compression",
      status: "shipped",
      version: "2.2.8",
      votes: 1156,
      userVoted: false,
    },
    {
      id: "5",
      title: "Auto Subtitle Generation",
      description:
        "Generate accurate subtitles in 50+ languages with speaker detection",
      status: "shipped",
      version: "2.1.5",
      votes: 1089,
      userVoted: true,
    },
    {
      id: "6",
      title: "Green Screen Removal",
      description:
        "AI-powered background removal without requiring green screens",
      status: "in-progress",
      votes: 823,
      userVoted: false,
    },
    {
      id: "7",
      title: "Auto Scene Detection",
      description:
        "Automatically identify and segment scenes for faster editing workflows",
      status: "planned",
      votes: 634,
      userVoted: false,
    },
    {
      id: "8",
      title: "Performance Analytics",
      description:
        "Track video performance across platforms with detailed engagement metrics",
      status: "planned",
      votes: 521,
      userVoted: true,
    },
    {
      id: "9",
      title: "Instant Video Generation",
      description:
        "Generate complete videos from text prompts in under 60 seconds",
      status: "planned",
      votes: 445,
      userVoted: false,
    },
    {
      id: "10",
      title: "Multi-Camera Sync",
      description:
        "Automatically sync footage from multiple cameras using audio waveforms",
      status: "planned",
      votes: 398,
      userVoted: false,
    },
    {
      id: "11",
      title: "AI Music Generation",
      description:
        "Create custom background music that matches your video's mood and pacing",
      status: "planned",
      votes: 367,
      userVoted: false,
    },
    {
      id: "12",
      title: "Batch Processing",
      description: "Apply effects and edits to multiple videos simultaneously",
      status: "planned",
      votes: 334,
      userVoted: false,
    },
    {
      id: "13",
      title: "Live Streaming Integration",
      description:
        "Stream directly to YouTube, Twitch, and other platforms with one click",
      status: "planned",
      votes: 298,
      userVoted: false,
    },
    {
      id: "14",
      title: "Face Swap Technology",
      description:
        "Replace faces in videos with AI-powered deepfake technology",
      status: "planned",
      votes: 267,
      userVoted: false,
    },
    {
      id: "15",
      title: "360° Video Support",
      description:
        "Edit and export immersive 360-degree videos for VR platforms",
      status: "planned",
      votes: 234,
      userVoted: false,
    },
  ];
  return (
    <div className="grid lg:grid-cols-7 ">
      <Card className="col-span-3">
        <CardHeader>
          <CardTitle>Duyurular</CardTitle>
          <CardDescription>
            Sistem duyuruları ve diğer duyurular
          </CardDescription>
        </CardHeader>
        <CardContent className="pl-2">
          <div className="flex-1 overflow-auto">
            <div className="max-w-4xl mx-auto px-6 py-6 ">
              <div className="border border-border rounded-lg  bg-background overflow-y-scroll min-h-[500px] max-h-[600px]">
                <table className="w-full ">
                  <thead className="bg-muted/50 border-b border-border">
                    <tr>
                      <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground w-8">
                        #
                      </th>
                      <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground">
                        Duyuru
                      </th>
                      <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground w-24">
                        Tip
                      </th>
                      <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground w-20">
                        Oku
                      </th>
                    </tr>
                  </thead>
                  <tbody className="">
                    {initialFeatures.map((feature, index) => (
                      <tr
                        key={feature.id}
                        className="border-b border-border hover:bg-muted/30 transition-colors"
                      >
                        <td className="py-3 px-4 text-xs text-muted-foreground">
                          {index + 1}
                        </td>
                        <td className="py-3 px-4">
                          <div className="min-w-0">
                            <div className="text-sm font-medium text-foreground leading-tight">
                              {feature.title}
                            </div>
                            <div className="text-xs text-muted-foreground leading-tight mt-1 line-clamp-2">
                              {feature.description}
                            </div>
                          </div>
                        </td>
                        <td className="py-3 px-4">kkk</td>
                        <td className="py-3 px-4">
                            <Button className="bg-indigo-400 hover:bg-indigo-700">

                          <Mails />
                            </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      {/* <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>Recent Sales</CardTitle>
                  <CardDescription>Latest deals closed by your team</CardDescription>
                </CardHeader>
                <CardContent>
            
                </CardContent>
              </Card> */}
    </div>
  );
};

export default Duyurular;
