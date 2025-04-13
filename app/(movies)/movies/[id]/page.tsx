const MovieDetail = async ({params}: {params: {id: string}}) => {
  const {id} = await params;
  return <h1>MovieDetail {id}</h1>;
};

export default MovieDetail;
