export default async function page({ params }) {
  const { slug } = await params;

  if (slug?.length > 0) {
    return (
      <div className="flex justify-center items-center flex-col min-h-screen">
        {slug.map((pa) => (
          <p className="text-red-500 text-4xl pb-3" key={pa.id}>
            {pa}
          </p>
        ))}
      </div>
    );
  }
  return (
    <div>
      <h2>
        :<p>Home page now </p>
      </h2>
    </div>
  );
}
