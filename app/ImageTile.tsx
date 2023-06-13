import Image from "next/image";
import { getPlaiceholder } from "plaiceholder";

// Constants
const NEXT_URL =
  process?.env?.NODE_ENV === "production"
    ? "https://i.postimg.cc"
    : "http://localhost:4001";

// Types
type Props = {
  altText?: string;
  remoteSrc: string;
  localSrc: string;
  title?: string;
};

const TileImage = async ({ altText, remoteSrc, localSrc, title }: Props) => {
  const src = process?.env?.NODE_ENV === "production" ? remoteSrc : localSrc;

  const buffer = await fetch(`${NEXT_URL}${src}`).then(async (res) =>
    Buffer.from(await res.arrayBuffer())
  );
  const { base64 } = await getPlaiceholder(buffer);

  return (
    <div className="max-w-full h-full object-cover m-1">
      <Image
        alt={altText ? altText : title || ""}
        blurDataURL={base64}
        height="202"
        placeholder="blur"
        src={src || ""}
        width="364"
      />
    </div>
  );
};

export default TileImage;
