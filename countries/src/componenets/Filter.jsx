const Filter = ({ filter, handleFilter }) => {
    return (
        <div>
            <form>
                <div> Search Countries <br></br>
                     < input value={filter} onChange={handleFilter} />
                </div>
            </form>
        </div>
    );
};

export default Filter