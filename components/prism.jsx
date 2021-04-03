import Highlight, { defaultProps } from "prism-react-renderer";

const Prism = ({ code, language = [] }) => (
  <Highlight
    {...defaultProps}
    theme={undefined}
    code={code}
    language={language}
  >
    {({ className, style, tokens, getTokenProps }) => (
      <pre className={className} style={style}>
        {tokens.map((line) => (
          <div key={line}>
            {line.map((token, key) => (
              <span {...getTokenProps({ token, key })} />
            ))}
          </div>
        ))}
      </pre>
    )}
  </Highlight>
);

export default Prism;
