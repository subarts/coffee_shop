import React from "react";
import Image from "next/image";
const About = () => {
  return (
    <section className="mt-[6.25rem]" id="about">
      <h2 className="text-6xl leading-[125%] font-semibold">
        Resource is
        <span className="captionItalic"> the perfect and cozy place</span> where
        <br />
        you can enjoy a variety of hot beverages, relax,
        <br />
        catch up with friends, or get some work done.
      </h2>
      <div className="imgList mt-10">
        <div className="blockImg">
          <div className="firstImg">
            <Image
              src={"/image/about-1.svg"}
              alt="woman with coffee"
              width={726}
              height={726}
            />
          </div>
          <div className="secondImg">
            <Image
              src={"/image/about-2.svg"}
              alt="woman with coffee"
              width={660}
              height={430}
            />
          </div>
        </div>
        <div className="blockImg">
          <div className="thirdImg">
            <Image
              src={"/image/about-3.svg"}
              alt="woman with coffee"
              width={660}
              height={430}
            />
          </div>
          <div className="fourImg">
            <Image
              src={"/image/about-4.svg"}
              alt="woman with coffee"
              width={660}
              height={590}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
