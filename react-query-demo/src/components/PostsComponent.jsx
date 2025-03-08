import { useQuery } from '@tanstack/react-query'
import axios from "axios";

const fetchPosts = async () =>  {
    const response = await axios.get ('https://jsonplaceholder.typicode.com/posts'); 
    return response.data;
}


function PostsComponent () {
  const {
    data: posts,
    isError, 
    isLoading, 
    refetch,
  } =
  useQuery ({
    queryKey: ["post"],
    queryFn: fetchPosts, 
    staleTime: 2000,
    cacheTime: 300000,
    keepPreviousData: true,
    refetchOnWindowFocus:false,
});

    if (isLoading) return <p> Posts Loading...</p>
    if (isError) return <p>Post loading error</p>

    return (
        <div>
            <h2>Posts</h2>
            <button onClick={refetch}></button>
            {isFetching ? "Refreshing..." : "Refetch Posts"}
            <ul>
                {posts.map((posts) =>
                    <li key={posts.id}>
                        <strong>{posts.title}</strong>
                        <p>{posts.body}</p>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default PostsComponent;