import React, { useState, useEffect, useRef } from 'react';
import { Events } from 'react-scroll';

import { SolidButton } from 'assets/styles/buttons';
import { Heading4, Paragraph, Caption } from 'assets/styles/typography';
import TextField from 'assets/styles/general/TextField';
import Link from 'components/Link';
import { StyledForm, SuccessMessage } from './styles';

function Form() {
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [form, setForm] = useState({
    fname: '',
    email: '',
    company: '',
    jobTitle: '',
  });
  const firstInput = useRef(null);

  useEffect(() => {
    Events.scrollEvent.register('end', (to) => {
      if (to === 'form') {
        firstInput.current?.getNativeInput_()?.focus();
      }
    });

    return () => Events.scrollEvent.remove('end');
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

    const payload = { ...form, language: 'ro' };

    await fetch('https://thinkout.io/mailchimp/index.php', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
    });

    setSuccess(true);
    setIsLoading(false);

    window.gtag('event', 'filled-form', {
      event_category: 'ro-ebook',
    });
  };

  return success ? (
    <SuccessMessage>
      <Heading4>Spor la citit!</Heading4>
      <Paragraph>Ebook-ul a fost trimis și va ajunge în inbox-ul tău în câteva minute.</Paragraph>
      <Paragraph>
        Sperăm ca materialul pregătit de noi să îți fie de folos. Dacă vrei să împărtășești cu noi
        opinia ta despre informațiile prezente în ebook, dă-ne un semn pe{' '}
        <Link href="mailto:office@thinkout.io">office@thinkout.io</Link>
      </Paragraph>
      <Paragraph>
        Dacă nu mai vrei să aștepți, poți să îl descarci direct de{' '}
        <Link href="https://thinkout.io/thinkout_indicatori_financiari_IMM.pdf" target="_blank">
          aici
        </Link>
        .
      </Paragraph>

      <Link button href="https://thinkout.io">
        CONTINUĂ CĂTRE SITE-UL NOSTRU
      </Link>
    </SuccessMessage>
  ) : (
    <StyledForm id="ebook-form" onSubmit={onSubmit}>
      <TextField
        className="field"
        name="fname"
        label="Nume"
        required
        value={form.fname}
        onChange={onInputChange}
        foundationRef={firstInput}
      />
      <TextField
        className="field"
        name="email"
        label="Adresă de e-mail"
        required
        value={form.email}
        onChange={onInputChange}
      />
      <TextField
        className="field"
        name="company"
        label="Companie"
        required
        value={form.company}
        onChange={onInputChange}
      />
      <TextField
        className="field"
        name="jobTitle"
        label="Funcție"
        required
        value={form.jobTitle}
        onChange={onInputChange}
      />
      <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
        <input
          type="text"
          name="b_4038f975c51eb86cf9d408224_5cb3df8d0b"
          tabIndex="-1"
          value={form.b_4038f975c51eb86cf9d408224_5cb3df8d0b}
          onChange={onInputChange}
        />
      </div>
      <Caption>
        Dacă ne lași datele tale înseamnă că ești de acord cu{' '}
        <Link href="https://thinkout.io/ro/termeni-si-conditii/" target="_blank">
          Termenii și condițiile
        </Link>{' '}
        &{' '}
        <Link href="https://thinkout.io/ro/confidentialitate/" target="_blank">
          Politica de confidențialitate
        </Link>{' '}
        ThinkOut.
      </Caption>
      <SolidButton disabled={isLoading}>VREAU O COPIE GRATUITĂ A EBOOK-ULUI</SolidButton>
    </StyledForm>
  );
}
export default Form;
