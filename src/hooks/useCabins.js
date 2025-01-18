import { useState, useEffect } from 'react'
import { supabase } from '../config/supabase'

export const useCabins = () => {
  const [cabins, setCabins] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchCabins()
  }, [])

  const fetchCabins = async () => {
    try {
      const { data, error } = await supabase
        .from('cabins')
        .select('*')

      if (error) throw error

      setCabins(data)
    } catch (error) {
      setError('Error fetching cabins')
      console.error('Error:', error)
    } finally {
      setLoading(false)
    }
  }

  const getCabinById = async (id) => {
    try {
      const { data, error } = await supabase
        .from('cabins')
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

  return { cabins, loading, error, getCabinById }
} 