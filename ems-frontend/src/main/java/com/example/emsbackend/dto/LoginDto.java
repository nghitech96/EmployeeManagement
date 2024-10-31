package com.example.emsbackend.dto;

import lombok.*;

@Setter
@Getter
@Data
@NoArgsConstructor
@AllArgsConstructor

public class LoginDto {
    private String username;
    private String password;
}
