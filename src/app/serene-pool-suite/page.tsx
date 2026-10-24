import RoomDetailPage from '../accommodation/[slug]/page';

export default function SerenePoolSuiteLegacyPage() {
  return <RoomDetailPage params={Promise.resolve({ slug: 'serene-pool-suite' })} />;
}
