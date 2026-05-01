'use client'
import { createContext, useContext, useEffect, useState } from 'react'
import { onAuthChange } from '@/lib/firebase/auth'
import { listenUser } from '@/lib/firebase/firestore'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [firebaseUser, setFirebaseUser] = useState(undefined) // undefined = loading
  const [userDoc, setUserDoc]           = useState(null)
  const [loading, setLoading]           = useState(true)

  useEffect(() => {
    // Watch Firebase Auth state
    const unsubAuth = onAuthChange(async (fbUser) => {
      setFirebaseUser(fbUser)

      if (!fbUser) {
        setUserDoc(null)
        setLoading(false)
        return
      }

      // Subscribe to Firestore user document
      const unsubUser = listenUser(fbUser.uid, (doc) => {
        setUserDoc(doc)
        setLoading(false)
      })

      return () => unsubUser()
    })

    return () => unsubAuth()
  }, [])

  const value = {
    firebaseUser,   // raw Firebase user object
    userDoc,        // Firestore /users/{uid} document
    uid: firebaseUser?.uid || null,
    loading,
    isLoggedIn: !!firebaseUser,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuthContext() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuthContext ต้องใช้ภายใน <AuthProvider>')
  return ctx
}
