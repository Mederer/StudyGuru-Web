import { useGetAllTopicsQuery } from "../../services/studyguruApi.ts";

function TopicList() {
    const { data, isLoading, isError } = useGetAllTopicsQuery();

    if (isError) {
        return <div>Error: {isError.toString()}</div>;
    }

    if (isLoading || !data) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {data.map((topic) => (
                <div key={topic.id}>
                    <h2 style={{ color: topic.colour }}>{topic.name}</h2>
                </div>
            ))}
        </div>
    );
}

export default TopicList;
