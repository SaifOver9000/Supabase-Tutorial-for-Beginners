import supabase from "../config/supabaseClient"
import { useEffect, useState } from "react"

//components
import SmoothieCard from "../components/SmoothieCard"

//Spelling matters remember to make sure that your speeling matches
const Home = () => {
  const [fetchError, setFetchError] = useState(null)
  const [Smoothies, setSmoothies] = useState(null)

  useEffect(() => {

    const fetchSmoothies = async () => {
      const {data, error} = await supabase
        .from('Smoothies')
        .select()

        if(error){
          setFetchError('Could not fetch the smoothies')
          setSmoothies(null)
          console.log(error)
        }
        if(data){
          setSmoothies(data)
          setFetchError(null)
        }
    }

    fetchSmoothies()

  }, [])
  return (
    <div className="page home">
      {fetchError && (<p>{fetchError}</p>)}
      {Smoothies && (
        <div className="Smoothies">
          {/* order-by buttons */}
          <div className="Smoothie-grid">
          {Smoothies.map(Smoothies => (
            <SmoothieCard key={Smoothies.id} Smoothies ={Smoothies}></SmoothieCard>
        ))}
          </div>
        </div>
    )}
    
  </div>
    
  )
}

export default Home