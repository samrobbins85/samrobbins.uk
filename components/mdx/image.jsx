/* eslint-disable jsx-a11y/alt-text */
export default function MyImg({ title, ...props }) {
  if (title !== undefined) {
    return (
      <figure>
        <img {...props} />
        <figcaption className="text-center">{title}</figcaption>
      </figure>
    );
  }
  return <img {...props} />;
}
