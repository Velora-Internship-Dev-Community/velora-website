interface Props {
  params: { slug: string };
}

export default function ProjectPage({ params }: Props) {
  return <main>Project: {params.slug}</main>;
}
