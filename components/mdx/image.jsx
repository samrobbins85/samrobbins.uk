export default function MyImg({ title, ...props }) {
  if (title !== undefined) {
    return (
      <figure>
        <img alt="" {...props} />
        <figcaption className="text-center">{title}</figcaption>
      </figure>
    );
  }
  return <img alt="" {...props} />;
}
