function Pagination(props) {

    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(props.totalItems / props.itemsPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <div className="pagination">
            {pageNumbers.map(number => {
                return <button className='bp3-button bp3-intent-secondary bp3-elevation-1' onClick={() => props.paginate(number)}>{number}</button>
            })}
        </div>
    )
}

export default Pagination