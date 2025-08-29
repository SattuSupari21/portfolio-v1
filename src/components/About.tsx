import Links from "./Links";

export const About = () => {
  return (
    <div className="w-full space-y-4">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2 text-4xl">
          <img
            src="/images/PepeHi.png"
            alt="PepePray"
            className="w-14 oject-cover"
          />
          <p> I'm Satvik</p>
        </div>
        <span className="opacity-80 leading-relaxed">
          I am an aspiring developer who simply loves to build things. I love to
          experiment with new technologies and programming languages, constantly
          seeking to expand my knowledge and skills.
        </span>
      </div>
      <Links />
    </div>
  );
};
