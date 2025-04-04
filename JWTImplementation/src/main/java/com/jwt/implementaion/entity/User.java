package com.jwt.implementaion.entity;


import java.util.Collection;
import java.util.List;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;


@Document(collection = "user")
public class User implements UserDetails {

	   @Id
	   private String id;
		
	   private String name;
	   private String email;
	   private String password;
	   
	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return List.of();
	}
	
	@Override
	public String getPassword() {
		return password;
	}
	
	@Override
	public String getUsername() {
		return email;
	}
	
	  @Override
	   public boolean isAccountNonExpired() {
	       return true;
	   }
	  
	   @Override
	   public boolean isAccountNonLocked() {
	       return true;
	   }
	   
	   @Override
	   public boolean isCredentialsNonExpired() {
	       return true;
	   }
	   
	   @Override
	   public boolean isEnabled() {
	       return true;
	   }

	
	public User(Integer id, String name, String email, String password) {
		super();
		this.name = name;
		this.email = email;
		this.password = password;
	}
	
	public User() {
	}
	

	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
	

}
