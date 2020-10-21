const invalidProps = ({ invalid, errorId }) => ({
  "data-invalid": invalid,
  "aria-invalid": invalid,
  "aria-describedby": errorId,
});

export const passwordInputProps = ({ invalid, sharedPasswordInputProps, errorId }) => ({
  ...sharedPasswordInputProps,
  ...(invalid ? invalidProps({ invalid, errorId }) : {}),
});
