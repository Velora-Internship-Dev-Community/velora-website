import MiniHero from "@/components/MiniHero";

interface Props {
  params: { slug: string };
}

export default function ProjectPage({ params }: Props) {
  return (
    <MiniHero
      title={params.slug}
      description="This project case study is pending the approved Velora design and content."
    />
  );
}
