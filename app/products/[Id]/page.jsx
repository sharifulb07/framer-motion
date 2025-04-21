

export default async function ProductDetails({params}) {
    const id=(await params).Id

  return (
    <div>
        <h1>Product Details Number on {id} </h1>
      
    </div>
  )
}
