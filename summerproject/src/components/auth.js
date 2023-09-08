// Function to save the token to local storage
export const saveTokenToLocalStorage = (token) => {
    localStorage.setItem('token', token);
  };
  
  // Function to remove the token from local storage
  export const removeTokenFromLocalStorage = () => {
    localStorage.removeItem('token');
  };
  
  // Function to check if a user is authenticated
  export const isAuthenticated = () => {
    const token = localStorage.getItem('token');
    return token !== null;
  };