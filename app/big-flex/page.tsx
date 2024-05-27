"use client";
import { title } from "@/components/primitives";
import { Input, Button, Select, SelectItem } from "@nextui-org/react";
import React, { useEffect } from "react";
import AnimeTiles from "@/components/anime-tiles";

let baseApi = "https://kitsu.io/api/edge/";

export default function BigFlex() {
  const [value, setValue] = React.useState("");
  const [filter, setFilter] = React.useState("");
  const [animeListing, setAnimeListing] = React.useState([]);

  const filterOptions = [
    {
      value: "categories",
      label: "Category",
    },
    {
      value: "text",
      label: "Anime Name",
    },
  ];
  const handleSelectionChange = (e) => {
    setFilter(e.target.value);
  };

  const handleRequest = async () => {
    const url = `${baseApi}anime?filter[${filter}]=${value}`;
    try {
      const animeData = await fetch(url).then((animeData) => animeData.json());
      console.log(animeData);
      setAnimeListing(animeData.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="justify-center gap-4 py-8 text-center">
        <h1 className="text-4xl font-bold">Anime Search</h1>
        <p className="text-lg">
          Search for your favorite anime and get information on it.
        </p>
        <p className="text-lg">You can search by category or by anime name.</p>
      </div>
      <div className="flex flex-row items-center justify-center gap-4 py-8 md:py-10">
        <Select
          label="Select Search Filter"
          placeholder="Select Search Filter"
          selectedKeys={[filter]}
          onChange={handleSelectionChange}
          className="w-1/6"
        >
          {filterOptions.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </Select>
        <Input
          placeholder="Search"
          label="Search"
          className="w-1/3"
          value={value}
          onValueChange={setValue}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleRequest();
          }}
        />
        <Button className="bg-blue-600" onPress={handleRequest}>
          Search
        </Button>
      </div>
      <div className="grid grid-cols-4 gap-12">
        {animeListing.map((anime, index) => {
          return (
            <AnimeTiles
              key={index}
              title={
                anime.attributes.titles.en_us || anime.attributes.canonicalTitle
              }
              coverImage={anime.attributes.posterImage.medium}
              averageRating={anime.attributes.averageRating}
              tinyCoverImage={anime.attributes.posterImage.tiny}
              description={anime.attributes.description}
              ageRating={anime.attributes.ageRating}
              episodeCount={anime.attributes.episodeCount}
              nextRelease={anime.attributes.nextRelease}
              youtubeVideoId={anime.attributes.youtubeVideoId}
              subType={anime.attributes.subtype}
            />
          );
        })}
      </div>
    </div>
  );
}
