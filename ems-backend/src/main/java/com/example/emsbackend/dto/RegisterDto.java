package com.example.emsbackend.dto;

import lombok.*;

@Data
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor

public class RegisterDto {
    public String username;
    public String password;
}
