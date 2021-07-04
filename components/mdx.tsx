/* eslint-disable jsx-a11y/alt-text */
export function MyImg({ title, ...props }) {
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

export function MyTable(props) {
  return (
    <div className="overflow-x-auto">
      <table {...props} />
    </div>
  );
}

export function MyPre(props) {
  // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
  return <pre {...props} tabIndex="0" />;
}
