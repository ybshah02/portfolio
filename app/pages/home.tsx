import personalData from "@/data/personal.json";

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <div className="max-w-3xl w-full">
        <h1 className="text-6xl font-bold mb-12 text-gray-900 leading-tight">
          {personalData.name.split("").map((char, index) => {
            // Make certain letters lighter (e, a, n in "evan" and j, i, a, n, g in "jiang")
            const lightChars = ["e", "a", "n", "j", "i", "g"];
            const isLight = lightChars.includes(char.toLowerCase());
            return (
              <span
                key={index}
                className={isLight ? "text-gray-500" : "text-gray-900"}
              >
                {char}
              </span>
            );
          })}
        </h1>
        <div className="space-y-6 text-sm text-gray-800 leading-relaxed font-light">
          <p>
            i graduated from <strong className="font-semibold">ucla</strong> in <strong className="font-semibold">june of 2024</strong>. since then, i've spent my time building <strong className="font-semibold">full-stack improvements</strong> in the checkout experience for <strong className="font-semibold">amazon key's in-garage delivery</strong>.
          </p>
          <p>
            looking back, i spent my time focusing on 3 things: learning the relation between <strong className="font-semibold">investors</strong>, <strong className="font-semibold">products</strong>, and <strong className="font-semibold">people</strong>; learning the approach to <strong className="font-semibold">breaking down problems</strong> and <strong className="font-semibold">leading teams</strong> to meet forth set expectations; and building experiences with obsession over the <strong className="font-semibold">customer</strong>.
          </p>
          <p>
            along the way, i've built and scaled <strong className="font-semibold">communities</strong> (bruin ventures), built <strong className="font-semibold">ai-focused tools</strong> (see projects), and driven excellence in my <strong className="font-semibold">professional experience</strong> (see resume).
          </p>
          <p>
            looking forward, i'm thinking about what's next in building <strong className="font-semibold">ai-powered solutions</strong> for <strong className="font-semibold">developers</strong> and <strong className="font-semibold">customers</strong>.
          </p>
          <p>
            reach out at <a href="mailto:me@yashbhshah.com" className="text-gray-900 hover:underline"><strong className="font-semibold">me@yashbhshah.com</strong></a> to chat and talk about what you're working on!
          </p>
        </div>
      </div>
    </div>
  );
}

