import styled from 'styled-components';
import { TextField as RMWCTextField } from '@rmwc/textfield';

export const StyledTextField = styled(RMWCTextField)`
  &.mdc-text-field {
    height: 45px;

    &:not(.mdc-text-field--disabled) {
      background-color: transparent;

      &:hover {
        background-color: transparent;
      }

      .mdc-floating-label {
        color: inherit;
        left: 0;
      }

      .mdc-line-ripple {
        &::before {
          border-bottom-color: #f2f2f2;
        }
      }
    }

    .mdc-text-field__ripple {
      &::before {
        background-color: transparent;
      }
    }

    .mdc-text-field__input {
      caret-color: inherit;
      padding-left: 0;

      &:-webkit-autofill + .mdc-floating-label {
        transform: translateY(-106%) scale(0.75);
      }
    }
  }
`;
