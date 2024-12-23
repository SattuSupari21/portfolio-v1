"use client";

export const Skills = () => {
  return (
    <div className="w-full space-y-4">
      <span className="flex gap-2 items-center text-xl font-medium">
        Skills
      </span>
      <div className="flex flex-col gap-2">
        <span className="font-semibold">Languages</span>
        <span className="text-sm opacity-80">
          Python, C/C++, SQL (Postgres, MySQL), NoSQL (MongoDB, Redis),
          JavaScript, Typescript, HTML/CSS
        </span>
      </div>
      <div className="flex flex-col gap-2">
        <span className="font-semibold">Tools & Technologies</span>
        <span className="text-sm opacity-80">
          React, Next.js, Node.js, Elysia.js, Hono, Express, FastAPI, RESTful
          API, GraphQL, Tailwind CSS, shadcn/ui
        </span>
      </div>
      <div className="flex flex-col gap-2">
        <span className="font-semibold">Developer Tools</span>
        <span className="text-sm opacity-80">
          Linux, Git, Docker, VS Code, PyCharm, WebStorm, Neovim, Postman,
          Jupyter
        </span>
      </div>
    </div>
  );
};
