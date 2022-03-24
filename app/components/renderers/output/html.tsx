import { DangerousHTML } from './dangerous';
import { useFetchLongContent } from './hooks';

export const HTMLOutput = ({
  content,
  path,
}: {
  content: string;
  contentType: string;
  path?: string;
}) => {
  const { loading, error, longContent } = useFetchLongContent(path);

  if (loading) return <div>Loading....</div>;
  if (error) return <div>ERROR!!! {error}</div>;
  return (
    <div>
      <DangerousHTML content={longContent ? longContent.content : content} />
    </div>
  );
};
