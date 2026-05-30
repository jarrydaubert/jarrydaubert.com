import Image from "next/image";

type FigureProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
};

/**
 * The only image path for content/body images. Requires width+height so
 * next/image can reserve space and avoid CLS (the no-img-element ESLint rule
 * pushes authors here).
 */
export function Figure({
  src,
  alt,
  width,
  height,
  caption,
  priority = false,
  sizes = "(min-width: 768px) 48rem, 100vw",
  className,
}: FigureProps) {
  return (
    <figure className={className}>
      <div className="overflow-hidden rounded-md border border-border bg-surface">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          sizes={sizes}
          className="h-auto w-full object-cover"
        />
      </div>
      {caption ? (
        <figcaption className="mt-2 text-sm text-subtle">{caption}</figcaption>
      ) : null}
    </figure>
  );
}
