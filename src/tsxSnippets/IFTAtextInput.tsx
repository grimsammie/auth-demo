<extInput
      ref={textInputRef}
      width={width}
      name={name}
      type={type}
      onBlur={onBlur}
      onChange={onChange}
      onFocus={onFocus}
      value={value}
      error={error}
      placeholder={placeholder}
      autoFocus={autoFocus}
    />
    <Label error={error}>{label}</Label>
    {error && errorText && (
      <ErrorWrapper error>{errorText}</ErrorWrapper>
    )}