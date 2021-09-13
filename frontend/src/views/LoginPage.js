import AuthTemplate from 'components/templates/AuthTemplate';
import Input from 'components/Input';
import Heading from 'components/Heading';
import Text from 'components/Text';
import StyledLink from 'components/StyledLink';
import SocialAuthButton from 'components/SocialAuthButton';
import googleIcon from 'assets/images/social/google-icon.svg';
import facebookIcon from 'assets/images/social/facebook-icon.svg';
import Button from 'components/Button';

const LoginPage = () => {
  return (
    <AuthTemplate>
      <Heading>Zaloguj się</Heading>
      <Text>
        Nie masz konta? <StyledLink to="/register">Zarejestruj się</StyledLink>
      </Text>

      <SocialAuthButton socialIcon={googleIcon} socialName="Google">
        Zaloguj się przez Google
      </SocialAuthButton>
      <SocialAuthButton socialIcon={facebookIcon} socialName="Google">
        Zaloguj się przez Facebook
      </SocialAuthButton>
      <Input />
      <Input name="Hasło" type="password" placeholder="Wpisz hasło" />
      <Button>Zaloguj się</Button>
      <StyledLink to="/forgot-password">Nie pamiętasz hasła?</StyledLink>
    </AuthTemplate>
  );
};

export default LoginPage;
