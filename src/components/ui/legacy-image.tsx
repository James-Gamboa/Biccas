type LegacyImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  src: string;
};

/**
 * Native img — preserves legacy CSS sizing (negative margins, natural dimensions).
 * next/image constraints break the original layout.
 */
export const LegacyImage = ({
  src,
  alt = "",
  className,
  ...props
}: LegacyImageProps) => (
  // eslint-disable-next-line @next/next/no-img-element
  <img src={src} alt={alt} className={className} {...props} />
);
