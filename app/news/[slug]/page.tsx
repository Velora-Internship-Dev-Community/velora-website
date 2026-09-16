interface Props {
  params: { slug: string };
}

export default function NewsArticlePage({ params }: Props) {
  return <main>News Article: {params.slug}</main>;
}
