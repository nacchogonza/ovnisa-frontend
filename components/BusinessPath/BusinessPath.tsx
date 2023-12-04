import React from "react";
import ReactMarkdown from "react-markdown";

import Image from "next/image";

interface BusinessPathContent {
  title: String;
  subtitle: String;
  description: string;
  items: BusinessPathItem[];
}

interface BusinessPathItem {
  id: number;
  title: String;
  description: String;
  icon: any;
}

const loaderProp = ({ src }: { src: string }) => {
  return src;
};

export const BusinessPath = ({
  title,
  subtitle,
  description,
  items,
}: BusinessPathContent) => {
  return (
    <div className=" bg-white py-4 lg:py-20 px-10 lg:px-40 flex gap-6 lg:gap-10 flex-row w-full ">
      <div className="flex flex-col lg:w-1/3">
        <h2 className="text-ov-primaryLight font-bold text-2xl lg:text-5xl mb-4">
          {title}
        </h2>
        <h5 className="font-semibold text-xl lg:text-3xl mb-4">{subtitle}</h5>

        <div className="mb-6">
          <ReactMarkdown
            className="lg:text-lg font-regular flex flex-col gap-4"
            children={description}
          />
        </div>
      </div>
      <div className="hidden lg:block businessPathDivisor"></div>
      <div className="hidden lg:flex lg:w-2/3 items-start">
        <div className="grid pl-10 grid-cols-3 gap-x-8 gap-y-16">
          {items.map((item, index) => (
            <div className="flex flex-col">
              <Image
                src={item.icon.data.attributes.url}
                alt={
                  "data.attributes.imagen_principal.data.attributes.alternativeText"
                }
                width={70}
                height={70}
                loader={loaderProp}
                className="mb-4"
              />
              <h6 className="font-bold text-lg lg:text-2xl mb-6">
                {item.title}
              </h6>
              <p className="lg:text-lg font-regular">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
