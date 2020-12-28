import FilledNav from "@/components/fillednav";
import DatedItem from "@/components/datedItem";
import Link from "next/link";
import { getAbout } from "@/lib/graphcms";
import Image from "next/image";
export default function About({ about }) {
  const data = about[0];
  console.log(data.technologies);
  return (
    <>
      <FilledNav />
      <div className="max-w-85ch mx-auto pt-8">
        <h1 className="text-5xl font-semibold">About</h1>
        <div className="py-6 border border-gray-300 rounded max-w-sm mx-auto px-2 my-4">
          <h3
            className="text-center text-xl italic about"
            dangerouslySetInnerHTML={{ __html: data.cv.html }}
          />
        </div>
        <h2 className="text-3xl font-semibold">Experience</h2>
        <div class="flex justify-center flex-col gap-y-8 py-2">
          {data.experiences.map((item) => (
            <DatedItem
              colour={item.backgroundColour.hex}
              image={item.logo}
              description={item.company}
              achievement={item.title}
              date={item.duration}
              formatdate={false}
            />
          ))}
        </div>
        <div className="px-2 py-4">
          <h2 className="text-3xl font-semibold py-2">Hackathons</h2>
          <ul class="hexGrid">
            {data.hackathons.map((item) => (
              <li class="hex">
                <div class="hexIn">
                  {item.slug ? (
                    <Link className="group" href={"/portfolio/" + item.slug}>
                      <a>
                        <Image
                          src={item.image.url}
                          alt={item.name}
                          layout="fill"
                          className="z-10"
                        />
                      </a>
                    </Link>
                  ) : (
                    <Image src={item.image.url} alt={item.name} layout="fill" />
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-3xl font-semibold">Skills</h2>
          <div className="flex justify-center gap-x-8 flex-wrap gap-y-4 py-4">
            {data.technologies.map((item) => (
              <a className="relative h-20 w-40" href={item.link}>
                <Image
                  src={item.image.url}
                  alt={item.name}
                  layout="fill"
                  objectFit="contain"
                  priority={true}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const about = (await getAbout()) || [];
  return {
    props: { about },
  };
}
