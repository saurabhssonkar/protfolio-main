import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  video,
  links,
  className,
}: Props) {
  return (
<Card
  className={cn(
    "flex flex-col  overflow-hidden border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ease-in-out  bg-gray-50 dark:bg-gray-900 h-full"
  )}
>
  <Link
    href={href || "#"}
    className={cn("block cursor-pointer transition-transform duration-300 hover:scale-105", className)}
  >
    {video && (
      <video
        src={video}
        autoPlay
        loop
        muted
        playsInline
        className="pointer-events-none mx-auto h-44 w-full rounded-t-lg object-cover"
      />
    )}
    {image && (
      <Image
        src={image}
        alt={title}
        width={500}
        height={300}
        className="h-64 w-full rounded-t-lg object-cover"
      />
    )}
  </Link>
  <CardHeader className="px-4 py-3  bg-gray-50 dark:bg-gray-900">
    <div className="space-y-2">
      <CardTitle className="mt-1 text-lg font-medium">{title}</CardTitle>
      <time className="text-sm ">{dates}</time>
      <div className="hidden text-xs underline text-blue-600">
        {link?.replace("https://", "").replace("www.", "").replace("/", "")}
      </div>
      <p className="prose max-w-full  text-sm">
        {description}
      </p>
    </div>
  </CardHeader>
  <CardContent className="mt-auto px-4 py-2">
    {tags && tags.length > 0 && (
      <div className="flex flex-wrap gap-2 mt-2">
        {tags.map((tag) => (
          <Badge
            key={tag}
            className="px-2 py-1 text-xs font-medium text-blue-600 bg-blue-50 border border-blue-300 rounded-md"
          >
            {tag}
          </Badge>
        ))}
      </div>
    )}
  </CardContent>
  <CardFooter className="px-4 py-3 bg-gray-50 dark:bg-gray-900">
    {links && links.length > 0 && (
      <div className="flex flex-wrap gap-2">
        {links.map((link, idx) => (
          <Link href={link.href} key={idx} target="_blank">
            <Badge
              className="flex items-center gap-2 px-3 py-1 text-xs font-medium text-green-700 bg-green-50 border border-green-300 rounded-lg hover:bg-green-100"
            >
              {link.icon}
              {link.type}
            </Badge>
          </Link>
        ))}
      </div>
    )}
  </CardFooter>
</Card>

  );
}
