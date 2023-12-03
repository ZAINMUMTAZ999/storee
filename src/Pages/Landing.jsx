import { FeaturedProducts, Hero } from '../Components'
import { customFetch } from '../utils/index'
const url = '/products?featured=true'
export const loader = async () => {
  const response = await customFetch(url)
  const products = response.data.data
  // console.log(data)
  // console.log(data)
return {products}

}
const Landing = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts/>
    </>
  )
}

export default Landing