import { useState, useEffect } from 'react'
import { supabase } from '../config/supabase'

export const useRooms = () => {
  const [rooms, setRooms] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchRooms()
  }, [])

  const fetchRooms = async () => {
    try {
      const { data, error } = await supabase
        .from('rooms')
        .select('*')

      if (error) throw error

      setRooms(data)
    } catch (error) {
      setError('Error fetching rooms')
      console.error('Error:', error)
    } finally {
      setLoading(false)
    }
  }

  const getRoomById = async (id) => {
    try {
      const { data, error } = await supabase
        .from('rooms')
        .select('*')
        .eq('id', id)
        .single()

      if (error) throw error

      return data
    } catch (error) {
      console.error('Error:', error)
      return null
    }
  }

  return { rooms, loading, error, getRoomById }
} 