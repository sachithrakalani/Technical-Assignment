import PropertyDetails from "@/component/Organisms/PropertyDetails";
import { properties } from "@/data/properties";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return properties.map((p) => ({ id: p.id }));
}

export default async function PropertyPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const property = properties.find((property) => property.id === id);
  if (!property) notFound();
  return <PropertyDetails property={property} />;
}
