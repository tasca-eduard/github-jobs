import Card from '../card/Card';

const List = ({jobs}) => {
    return (
        <div className="list">
            {jobs.map(job => 
                <Card key={job.id} job={job} />
            )}
        </div>
    )
}

export default List
