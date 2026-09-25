import type { Metadata } from "next"; import { InteriorPage } from "@/components/pages";
export const metadata:Metadata={title:"Products | SR Associates Pollachi",description:"Explore electronics, furniture and home appliances at SR Associates, Pollachi."};
export default function ProductsPage(){return <main><InteriorPage kind="products"/></main>}
