"use client"

import Card from "@/components/card";
import Navbar from "@/components/navBar";
import SearchBar from "@/components/searchBar";
import { useFetchHospitalsQuery } from "@/redux/slice/hospitalAPI";
import React, { useState } from "react";


const Page: React.FC = () => {

  const { data } = useFetchHospitalsQuery();
  const [searchTerm, setSearchTerm] = useState('');


  if (!data) {
    return <div>Loading...</div>;
    }

  const hospitals = data.data;

  const filteredHospitals = hospitals.filter(hospital =>
    hospital.institutionName.toLowerCase().includes(searchTerm.toLowerCase())
  );

return (
    <div>
        <Navbar logoSrc="/logo.svg" profilePicSrc="/profile.svg" />
        <SearchBar
        searchIconSrc="search-icon.png"
        onChange={e => setSearchTerm(e.target.value)}
      />
        <div className="grid mx-36 grid-rows-3 gap-4 p-10">
            {filteredHospitals.map((cardData) => (
                <Card
                    key={cardData._id}
                    title={cardData.institutionName}
                    address={cardData.address.summary + ", "+ cardData.address.region}
                    photo={cardData.photo}
                    company={cardData.institutionName}
                    tag={{text: cardData.availability.twentyFourHours ? "Open Now" : "Closed Now"}}
                    phoneNumbers={cardData.phoneNumbers}
                    emails={cardData.emails}
                />
            ))}
        </div>
    </div>
);
};

export default Page;

