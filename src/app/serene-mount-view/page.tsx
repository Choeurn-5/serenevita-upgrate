import RoomDetailPage from '../accommodation/[slug]/page';

export default function SereneMountViewLegacyPage() {
  return <RoomDetailPage params={Promise.resolve({ slug: 'serene-mount-view' })} />;
}
