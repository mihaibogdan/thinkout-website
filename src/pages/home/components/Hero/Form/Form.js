import React, { useState } from 'react';

import { SolidButton } from 'assets/styles/buttons';
import { Heading4, Paragraph, Caption } from 'assets/styles/typography';
import TextField from 'assets/styles/general/TextField';
import Link from 'components/Link';
import { StyledForm, SuccessMessage } from './styles';

function Form() {
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [form, setForm] = useState({
    FNAME: '',
    EMAIL: '',
    MMERGE2: '',
    MMERGE3: '',
  });

  const onInputChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    await fetch(
      'https://thinkout.us12.list-manage.com/subscribe/post?u=4038f975c51eb86cf9d408224&amp;id=5cb3df8d0b',
      {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-url-encoded',
          Accept: 'application/json',
        },
        body: new URLSearchParams(form), // body data type must match "Content-Type" header
      }
    );

    setSuccess(true);
    setIsLoading(false);
  };

  return success ? (
    <SuccessMessage>
      <Heading4>Spor la citit!</Heading4>
      <Paragraph>Ebook-ul a fost trimis.</Paragraph>
      <Paragraph>
        Sperăm ca materialul pregătit de noi să îți fie de folos. Dacă vrei să împărtășești cu noi
        opinia ta despre informațiile prezente în ebook, dă-ne un semn pe{' '}
        <Link href="mailto:office@thinkout.io">office@thinkout.io</Link>
      </Paragraph>

      <Link button href="https://thinkout.io">
        COUNTINUĂ CĂTRE SITE-UL NOSTRU
      </Link>
    </SuccessMessage>
  ) : (
    <StyledForm onSubmit={onSubmit} autoComplete="new-password">
      <TextField
        className="field"
        name="FNAME"
        label="Nume"
        required
        value={form.FNAME}
        onChange={onInputChange}
      />
      <TextField
        className="field"
        name="EMAIL"
        label="Adresă de e-mail"
        required
        value={form.EMAIL}
        onChange={onInputChange}
      />
      <TextField
        className="field"
        name="MMERGE2"
        label="Companie"
        required
        value={form.MMERGE2}
        onChange={onInputChange}
      />
      <TextField
        className="field"
        name="MMERGE3"
        label="Funcție"
        required
        value={form.MMERGE3}
        onChange={onInputChange}
      />
      <Caption>
        *Prin completarea formularului ești de acord cu abonarea la newsletterul ThinkOut.
      </Caption>
      <Caption>
        Dacă ne lași datele tale înseamnă că ești de acord cu{' '}
        <Link href="https://thinkout.io/ro/termeni-si-conditii/" target="_blank">
          Termenii și condițiile
        </Link>{' '}
        &{' '}
        <Link href="https://thinkout.io/ro/confidentialitate/" target="_blank">
          Politica de confidențialitate
        </Link>{' '}
        ThinkOut
      </Caption>
      <SolidButton disabled={isLoading}>VREAU O COPIE GRATUITĂ A EBOOK-ULUI</SolidButton>
    </StyledForm>
  );
}
export default Form;