package tech.olejnik.security;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class PasswordManagement {
    public static void main(String[] args){
        String password = "Password123";
        System.out.println(encryptPassword(password));
    }

    private static String encryptPassword(String password){
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        return encoder.encode(password);
    }
}
