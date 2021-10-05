import './App.css'
import LoginPage from './pages/LoginPage'


const firebaseConfig = {
  apiKey: "AIzaSyCv3kRS1-9Dc7STyHVMIqEgE_kYL4ccYoA",
  authDomain: "whatsapp-web-clone-bb1aa.firebaseapp.com",
  projectId: "whatsapp-web-clone-bb1aa",
  storageBucket: "whatsapp-web-clone-bb1aa.appspot.com",
  messagingSenderId: "624921792706",
  appId: "1:624921792706:web:b49dbcac28fd0c0f0eeb5b"
};
 firebase.initializeApp(firebaseConfig);


function App() {
  return (
    <div className="App">
      <LoginPage />
    </div>
  );
}

export default App;