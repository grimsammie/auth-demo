import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  StyledFileUploadSection,
  StyledFileUploadHeader,
  StyledFileUploadLabel,
  StyledFileUploadInfoText,
  StyledIconWrapper,
  StyledFileUploadBtn,
} from "components/supportModal/supportForm/SupportFormStyles";
import Button from "components/shared/styled/Button";
import FileItem from "components/supportModal/fileItem/FileItem";
import { StyledFileList } from "components/supportModal/fileItem/FileItemStyles";

const SupportForm = () => {
  const { t } = useTranslation();
  const [uploadedFiles, setUploadedFiles] = useState<any[]>([]);
  const [fileUploadValue, setFileUploadValue] = useState("");
  const hiddenFileInput = useRef<HTMLInputElement>(null);
  const handleClick = () => {
    hiddenFileInput.current?.click();
  };

  const handleFileUpload = (selectedFile: any[]) => {
    const currentFileList = [...uploadedFiles];
    selectedFile.some((file) => {
      // TODO - add maximum number of files that can be uploaded
      // TODO - add maximum file size allowed per file

      const alreadyUploadedFile = currentFileList.find(
        (fileItem) => file.name === fileItem.name,
      );

      const properFileType =
        file.type === "image/jpeg" ||
        file.type === "image/png" ||
        file.type === "application/pdf";

      if (!properFileType) {
        return true;
      }
      if (alreadyUploadedFile) {
        return true;
      }
      currentFileList.push(file);
      return true;
    });
    setUploadedFiles(currentFileList);
  };
  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFileUploadValue(event.target.value);
    const selectedFile = Array.prototype.slice.call(event.target.files);
    handleFileUpload(selectedFile);
    setFileUploadValue("");
  };
  const handleRemoveFile = (fileName: string) => {
    setUploadedFiles(uploadedFiles.filter((file) => file.name !== fileName));
  };

  return (
    
      <StyledFileUploadSection>
        <StyledFileUploadHeader>
          <StyledFileUploadLabel>
            {t("supportForm:attachFiles")}
          </StyledFileUploadLabel>
          <StyledFileUploadInfoText>
            <StyledIconWrapper>
              <Icon faIcon={faInfoCircle} size="sm" />
            </StyledIconWrapper>
            {t("supportForm:supportedFileTypes")}
          </StyledFileUploadInfoText>
        </StyledFileUploadHeader>
        <StyledFileList>
          {uploadedFiles.map((file, index: number) => {
            const key = `${file.name}-${index}`;
            return (
              <FileItem
                key={key}
                fileName={file.name}
                handleRemoveFile={handleRemoveFile}
              />
            );
          })}
        </StyledFileList>
        <StyledFileUploadBtn>
          <Button onClick={handleClick} type="button">
            {t("supportForm:chooseFile")}
          </Button>
          <input
            ref={hiddenFileInput}
            value={fileUploadValue}
            onChange={handleFileSelect}
            type="file"
            style={{ display: "none" }}
            accept=".jpg, .jpeg, .png, .pdf"
          />
        </StyledFileUploadBtn>
      </StyledFileUploadSection>
  );
};

export default SupportForm;
