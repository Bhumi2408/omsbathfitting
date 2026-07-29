import { notFound } from "next/navigation";
import { bathSets } from "../../data/bathSets";
import CollectionTemplate from "../../components/CollectionTemplate";

export async function generateStaticParams() {
  return bathSets.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const collection = bathSets.find((item) => item.slug === slug);

  if (!collection) {
    return {
      title: "Not Found",
    };
  }

  return {
    title: collection.seo.title,
    description: collection.seo.description,
    keywords: collection.seo.keywords,
  };
}

export default async function Page({ params }) {
  const { slug } = await params;

  const collection = bathSets.find((item) => item.slug === slug);

  if (!collection) {
    notFound();
  }

  return <CollectionTemplate collection={collection} />;
}