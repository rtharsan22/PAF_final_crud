'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { authFetch } from '@/lib/api'

export default function CreateCoursePage() {
  const router = useRouter()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [error, setError] = useState('')

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    try {
      await authFetch('/courses', {
        method: 'POST',
        body: JSON.stringify({ title, description }),
      })
      router.push('/courses')
    } catch (err: any) {
      setError(err.message || 'Failed to create course')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-semibold text-blue-700 mb-6 text-center">
          Start Your Studies
        </h1>
        {error && (
          <div className="bg-red-100 text-red-700 px-4 py-2 rounded mb-4">
            {error}
          </div>
        )}
        <form onSubmit={handleCreate} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-blue-700 mb-1">
              Subject
            </label>
            <input
              type="text"
              className="w-full border border-blue-300 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 p-2 rounded"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-blue-700 mb-1">
              About Your Plans
            </label>
            <textarea
              className="w-full border border-blue-300 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 p-2 rounded"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition duration-200"
          >
            Create
          </button>
        </form>
      </div>
    </div>
  )
}
