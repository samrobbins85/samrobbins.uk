import Highlight, { defaultProps } from "prism-react-renderer";

const Prism = ({ code, language = [] }) => {
  return (
    <Highlight
      {...defaultProps}
      code={code}
      language={language}
      theme={undefined}
    >
      {({ className, style, tokens, getTokenProps }) => (
        <pre className={className} style={style}>
          {tokens.map((line) => {
            return line.map((token, key) => (
              // eslint-disable-next-line
              <span {...getTokenProps({ token, key })} />
            ));
          })}
        </pre>
      )}
    </Highlight>
  );
};

export default Prism;
