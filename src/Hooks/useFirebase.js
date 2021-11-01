import { useEffect, useState } from 'react';
import firebaseInit from '../Firebase/firebase.init'
import { useHistory } from 'react-router';
import { getAuth, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import React from 'react';
firebaseInit();



const useFirebase = () => {
    //let history = useHistory();
    // we will store the user in a state
    const [user, setUser] = useState(null);
    //keeping a status to show the user if registration was succesfull or not
    // const [regStutus, setRegStutus] = useState('');
    const [isLoading, setIsLoading] = useState(true);


    // create account with email and password
    // const CreateAccountWithEmailPass = (email, password) => {
    //     createUserWithEmailAndPassword(auth, email, password)
    //         .then(result => {
    //             setIsLoading(true);
    //             setUser(result.user);
    //             setRegStutus("Successful");
    //             setIsLoading(false);
    //         })
    //         .catch((error) => {
    //             if (isLoading === false)
    //                 setRegStutus("error");

    //         });
    // }
    // // this fucntion for= login with email and password
    // const loginWithEmailPass = (email, password) => {
    //     signInWithEmailAndPassword(auth, email, password)
    //         .then((result) => {
    //             setIsLoading(true);
    //             setRegStutus("wait");
    //             setUser(result.user);
    //             setRegStutus("Login Successfull");
    //             setIsLoading(false);
    //         })
    //         .catch((error) => {
    //             if (!isLoading)
    //                 setRegStutus("Error try again");

    //         });
    // }

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    // fucntion for google sign in 
    const googleLogin = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {

                setIsLoading(true);

                setUser(result.user);

                setIsLoading(false);

            }).catch((error) => {

            });
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {


                setIsLoading(true);

                setUser(user);

                setIsLoading(false);


            } else {
                setUser(null);
            }
        });
    }, [])
    const handleLogout = () => {
        const auth = getAuth();
        signOut(auth).then(() => {

            setUser(null);
            // setRegStutus("Login Successfull");

        }).catch((error) => {


        });

    }
    return {
        user,

        googleLogin,

        handleLogout,
        isLoading

    }

}
export default useFirebase;