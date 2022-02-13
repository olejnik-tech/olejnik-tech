package tech.olejnik.exception;

import java.util.logging.Logger;

public class AccountNotFoundException extends Exception{

    public AccountNotFoundException(String email) {
        super("404 - Login: Account with email: \"" + email + "\" was not found.");
    }
}
