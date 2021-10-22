import { useState } from 'react';
import AuthTemplate from 'components/templates/AuthTemplate';
import Input from 'components/Input/Input';
import Heading from 'components/Heading/Heading';
import Text from 'components/Text/Text';
import Button from 'components/Button/Button';
import StyledLink from 'components/StyledLink/StyledLink';

const ForgotPasswordPage = () => {
  const [newPasswordSent, setNewPasswordSent] = useState(false);

  return (
    <AuthTemplate>
      {!newPasswordSent ? (
        <>
          <Heading>Nie pamiętasz hasła?</Heading>
          <Text>Wpisz email, na który ma zostać wysłane nowe hasło </Text>
          <Input />
          <Button onClick={() => setNewPasswordSent(true)}>
            Zresetuj hasło
          </Button>
        </>
      ) : (
        <>
          <Heading>Hasło wysłane!</Heading>
          <Text>Na twój email wysłaliśmy nowe hasło</Text>
          <StyledLink to="/login">Zaloguj się</StyledLink>
        </>
      )}
    </AuthTemplate>
  );
};

export default ForgotPasswordPage;
