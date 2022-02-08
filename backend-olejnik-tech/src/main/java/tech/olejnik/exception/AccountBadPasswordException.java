package tech.olejnik.exception;

public class AccountBadPasswordException extends Exception{
    public AccountBadPasswordException(String email) {
        super("401 - Login: Bad password for email \"" + email + "\".");
    }
}
