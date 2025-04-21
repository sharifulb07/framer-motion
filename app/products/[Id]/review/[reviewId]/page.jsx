import NotFound from "./not-found";


export default async function ReviewDetails({ params }) {
  const { Id, reviewId } = await params;

  if(Id>100){
    return (
      <div>
        <NotFound />
      </div>
    )
  }
    

  return (
    <div>
      <p>
        This is product {Id} and review for id number {reviewId}{" "}
      </p>
    </div>
  );
}
