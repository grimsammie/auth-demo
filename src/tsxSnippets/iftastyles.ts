export const StyledTextInput = styled.input<StyledTextInputProps>`

  width: 100%;
  border: 1px solid grey;
  color: black;
  max-width: ${({ width }) => width};
  padding: 2.98rem 1rem 1rem;
  border-radius: 5px;
  transition: border-color 0.2s linear;
  appearance: none;
  font-family: inherit;
  font-size: 1rem;
  box-sizing: border-box;

  &:disabled {
    opacity: 0.5;
    background-color: ${({ theme }) => theme.colors[ColorKey.white]};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors[ColorKey.placeholder]};
  }
  }

  &:focus {
    border-color: black;
  }
`;

export const LabelStyles = styled.label<StyledLabelProps>`
  color: black;
  font-size: 1.2rem;
  font-weight: 600;
  position: absolute;
  left: 0;
  padding: ${Spacing.xs};
  border: 1px solid transparent;
  pointer-events: none;
  `

  export const Errortext = styled.span<StyledTextInputProps>`
  position: absolute;
  padding: 1rem;
  border: 1px solid transparent;
  right: 0;
  color: red
  font-weight: 500;
  font-size: 1.2rem;
`;