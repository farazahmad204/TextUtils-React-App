import React from 'react'

export default function Alert( {alert=null} ) {

 const capitalize_word = (word) =>
    {
        const text=word.toLowerCase();
        console.log(text.charAt(0).toUpperCase() + text.slice(1));
        return text.charAt(0).toUpperCase() + text.slice(1);

    }


  return (
    alert && <div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalize_word(alert.type)}!</strong> {alert.message}
  
      </div>
    
  );
}
