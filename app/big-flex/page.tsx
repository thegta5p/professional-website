"use client";
import { title } from "@/components/primitives";
import {Input, Button, Select, SelectItem} from "@nextui-org/react";
import React from "react";

let baseApi = "https://kitsu.io/api/edge/";

export default function BigFlex() {
    const [value, setValue] = React.useState("");
    const [filter, setFilter] = React.useState("");
    const [animeListing, setAnimeListing] = React.useState([]);

    const filterOptions = [
        {

            value: "categories",
            label: "Category"
        },
        {

            value: "text",
            label: "Anime Name"  
        }
    ];
    const handleSelectionChange = (e) => {
        setFilter(e.target.value);
    };

    const handleRequest = async () => {
        const url = `${baseApi}anime?filter[${filter}]=${value}`;
        try {
            const response = await fetch(url);
            const animeData = response.json();
            console.log(animeData);
        }
        catch (error) {
            console.error(error);
        }

    };
  return (
    <div>
        <div className="flex flex-row items-center justify-center gap-4 py-8 md:py-10">
            <Select label="Select Search Filter" placeholder="Select Search Filter" selectedKeys={[filter]} onChange={handleSelectionChange} className="w-1/6">
                {filterOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
                ))}
            </Select>
            <Input placeholder="Search" label="Search" className="w-1/3"value={value} onValueChange={setValue}/>
            <Button className="bg-blue-600" onPress={handleRequest}>Search</Button>
        </div>
    </div>
  );
}
