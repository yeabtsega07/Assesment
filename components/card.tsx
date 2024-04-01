import React from "react";
import Image from "next/image";
import { Tag, TagProps } from "./tag";
import { Phone } from "lucide-react";

export type CardProps = {
  photo: string;
  title: string;
  company: string;
  address: string;
  tag: TagProps;
  phoneNumbers: string[];
  emails: string[];
};

const Card: React.FC<CardProps> = ({
  photo: logo,
  company,
  address: location,
  tag,
  phoneNumbers,
  emails,
}: CardProps) => {
  return (
    <div className="flex bg-[#7878f10a] rounded-3xl border shadow-sm overflow-hidden">
      <div className="flex-none">
        <Image
          className="object-cover w-[350px] h-[350px] rounded-3xl"
          src={logo || "/placeholder.jpg"}
          alt="logo"
          width={400}
          height={400}
        />
      </div>
      <div className="flex-grow grid  grid-cols-2">
        <div className="col-span-2 sm:col-span-1 w-[400px] pt-10 pl-10">
          <div className="flex items-center text-[#7879F1] mb-4">
            <span>{location}</span>
          </div>
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
            {company}
          </h2>
          <div className=" text-slate-800 flex gap-2 font-light">
            <Image src="/location.svg" alt="location" width={20} height={20} />3
            Kilometers Away
          </div>
        <div className="flex space-x-10 mt-16">
            <div className="flex flex-col items-start text-black">
                {phoneNumbers.map((phoneNumber, index) => (
                    <div key={index} className="flex items-center">
                        {index === 0 && <Image src="/phone.svg" alt="phone" width={20} height={20} />}
                        <div className={`text-sm ml-2  ${index > 0 ? 'pl-5' : ''} `}>
                            {phoneNumber}
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex flex-col items-start text-black">
                {emails.map((email, index) => (
                    <div key={index} className="flex items-center">
                        {index === 0 && <Image src="/email.svg" alt="email" width={20} height={20} />}
                        <div className={`text-sm ml-2  ${index > 0 ? 'pl-5' : ''} `}>
                            {email}
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </div>
        <div className="col-span-2 sm:col-span-1 flex justify-end items-start pt-12 mr-7">
          <Tag {...tag} />
        </div>
      </div>
    </div>
  );
};

export default Card;
