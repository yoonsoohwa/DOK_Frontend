import styled from 'styled-components';

export const CertifiCreate = styled.div`
  width: 100%;
  box-sizing: border-box;
  background: ${({ theme }) => theme.main4};

  .body {
    width: 90%;
    max-width: 800px;
    margin: 0 auto;
  }

  .half {
    width: 48%;
  }

  .MuiFormLabel-root {
    margin-bottom: 4px;
    font-size: small;
  }

  .preview {
    height: 200px;
    margin: 20px 0 40px;
    overflow: auto;

    .preview-image {
      height: calc(100% - 8px);
      padding: 4px 6px;
      position: relative;

      img {
        height: 99%;
        box-shadow: 1px 1px 5px #00000030;
      }

      .icon {
        position: absolute;
        top: 8px;
        right: 6px;
        color: #fff;
      }
    }
  }
`;

export const Contents = styled.div`
  padding-bottom: 36px;

  legend {
    display: flex;
  }

  .icon {
    color: #959595;
    width: 18px;
    height: 18px;
    margin-right: 4px;
  }

  &.file-input {
    margin-bottom: 40px;
    display: block;

    > div {
      display: flex;
      align-items: flex-start;
    }

    .pointer {
      color: rgba(0, 0, 0, 0.23);
    }

    label {
      min-width: 300px;
      border: solid 1px rgba(0, 0, 0, 0.23);
      border-radius: 4px;
      padding: 8.5px 14px;
      justify-content: space-between;

      font-size: 1rem;
      line-height: 1.4375em;
      box-sizing: border-box;
      display: inline-flex;
      align-items: center;

      span {
        overflow: hidden;
        text-overflow: ellipsis;
        margin-right: 4px;
      }

      &.error {
        border-color: #d32f2f;
      }
    }

    input#photo {
      display: none;
    }
  }
  .helper-text {
    color: #959595;
    font-family: Noto Sans KR;
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 1.66;
    text-align: left;
    margin-top: 3px;
    margin-right: 14px;
    margin-bottom: 0;
    margin-left: 14px;
    &.error {
      color: #d32f2f;
    }
  }

  a:hover {
    color: ${({ theme }) => theme.sub};
  }
`;
