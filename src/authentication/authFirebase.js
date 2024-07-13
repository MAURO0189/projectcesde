import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "./firebaseConfig";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;

    // Almacenar token y usuario en localStorage
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("userToken", token);

    return { user, token };
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);

    // Manejo de errores
    console.error(
      "Error al iniciar sesión con Google:",
      errorCode,
      errorMessage
    );
    alert(
      "Error al iniciar sesión con Google. Por favor, inténtalo de nuevo más tarde."
    );

    throw error;
  }
};

export { auth, provider, signInWithGoogle };
