package org.keycloak.authentication.authenticators.browser;


import java.util.ArrayList;
import java.util.List;

import org.keycloak.Config;
import org.keycloak.OAuth2Constants;
import org.keycloak.authentication.Authenticator;
import org.keycloak.authentication.AuthenticatorFactory;
import org.keycloak.models.AuthenticationExecutionModel;
import org.keycloak.models.KeycloakSession;
import org.keycloak.models.KeycloakSessionFactory;
import org.keycloak.models.credential.PasswordCredentialModel;
import org.keycloak.provider.ProviderConfigProperty;

public class RecaptchaUsernamePasswordFormFactory  implements AuthenticatorFactory {

    public static final String PROVIDER_ID = "recaptcha-u-p-form";
    public static final RecaptchaUsernamePasswordForm SINGLETON = new RecaptchaUsernamePasswordForm();
    public static final String SCRIPT_LINK = "scriptLink";
    public static final String SITE_VERIFY_LINK = "siteVerifyLink";

    public static final String SITE_KEY = "site.key";
    public static final String SITE_SECRET = "secret";
    @Override
    public Authenticator create(KeycloakSession session) {
        return SINGLETON;
    }

    @Override
    public void init(Config.Scope config) {

    }

    @Override
    public void postInit(KeycloakSessionFactory factory) {

    }

    @Override
    public void close() {

    }

    @Override
    public String getId() {
        return PROVIDER_ID;
    }

    @Override
    public String getReferenceCategory() {
        return PasswordCredentialModel.TYPE;
    }

    @Override
    public boolean isConfigurable() {
        return true;
    }

    public static final AuthenticationExecutionModel.Requirement[] REQUIREMENT_CHOICES = {
            AuthenticationExecutionModel.Requirement.REQUIRED
    };

    @Override
    public AuthenticationExecutionModel.Requirement[] getRequirementChoices() {
        return REQUIREMENT_CHOICES;
    }

    @Override
    public String getDisplayType() {
        return "Recaptcha Username Password Form";
    }

    @Override
    public String getHelpText() {
        return "Validates a username and password from login form + google recaptcha";
    }

    private static final List<ProviderConfigProperty> CONFIG_PROPERTIES = new ArrayList<>();

    static {
        ProviderConfigProperty property;
        property = new ProviderConfigProperty();
        property.setName(SITE_KEY);
        property.setLabel("Captcha Site Key");
        property.setType(ProviderConfigProperty.STRING_TYPE);
        property.setHelpText("Captcha Site Key");
        CONFIG_PROPERTIES.add(property);
        property = new ProviderConfigProperty();
        property.setName(SITE_SECRET);
        property.setLabel("Secret");
        property.setType(ProviderConfigProperty.STRING_TYPE);
        property.setHelpText("Captcha Secret");
        CONFIG_PROPERTIES.add(property);

        property = new ProviderConfigProperty();
        property.setName(SCRIPT_LINK);
        property.setLabel("Script URL");
        property.setType(ProviderConfigProperty.STRING_TYPE);
        property.setDefaultValue("");
        property.setHelpText("The script that rendered in the client-end");
        CONFIG_PROPERTIES.add(property);

        property = new ProviderConfigProperty();
        property.setName(SITE_VERIFY_LINK);
        property.setLabel("Site Verify URL");
        property.setType(ProviderConfigProperty.STRING_TYPE);
        property.setDefaultValue("");
        property.setHelpText("The URL used in the server-end to verify the captcha");
        CONFIG_PROPERTIES.add(property);
    }

    @Override
    public List<ProviderConfigProperty> getConfigProperties() {
        return CONFIG_PROPERTIES;
    }

    @Override
    public boolean isUserSetupAllowed() {
        return false;
    }

}