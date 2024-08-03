import React, { useState } from 'react';


function LoginMessage(props){
if(props.isLoggedIn){
  return <h1>Welcome Back{props.name}</h1>
} else{
  return <h1>Please Sign In</h1>
}
};

export default LoginMessage;