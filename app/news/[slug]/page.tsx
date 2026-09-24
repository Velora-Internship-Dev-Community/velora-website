import MiniHero from "@/components/MiniHero";
import Footer from "@/components/Footer";

interface Props {
  params: { slug: string };
}

export default function NewsArticlePage({ params }: Props) {
  return (
    <>
      <MiniHero
        title={params.slug}
        description="This article is pending the approved Velora design and content."
      />
      <Footer />
    </>
  );
}
